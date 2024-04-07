"use server";

import bcrypt from "bcrypt";

import {
  donors,
  jobs,
  offices,
  partners,
  projects,
  teamMembers,
  users,
} from "@/database/schema";
import { db } from "@/database/index";
import { revalidatePath } from "next/cache";
import { computeSHA256 } from "./computeSHA256";
import getSignedURL from "./getSignedURL";
import { saveImage } from "./saveImage";
import { ProjectFormSchema } from "@/zod/zod-schemas";

export const addAdminUserAction = async (data: FormData) => {
  const userPassword = data.get("password") as string;
  const hashedPassword = await bcrypt.hash(userPassword, 10); // hashing the password
  const image = data.get("image") as File;

  try {
    const checksum = await computeSHA256(image);

    const signedURL = await getSignedURL(image, checksum);

    const result = await saveImage(signedURL, image);

    if (result.status === 200) {
      const dbResult = await db
        .insert(users)
        .values({
          name: data.get("name") as string,
          password: hashedPassword,
          email: data.get("email") as string,
          role: "user",
          username: data.get("username") as string,
          url: signedURL.split("?")[0],
        })
        .returning();

      revalidatePath("/admin/users");

      return {
        status: "success",
        message: `Team member ${dbResult[0].name} created successfully`,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: "Unable to create user",
    };
  }
};

export const addprojectAction = async (data: FormData) => {
  const image = data.get("image") as File;

  const formatter = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  });

  const _sd = new Date(data.get("startDate") as string).toLocaleDateString();
  const _ed = new Date(data.get("endDate") as string).toLocaleDateString();

  const startDate = formatter.format(new Date(_sd));
  const endDate = formatter.format(new Date(_ed));

  try {
    const checksum = await computeSHA256(image);

    const signedURL = await getSignedURL(image, checksum);

    const result = await saveImage(signedURL, image);

    if (result.status === 200) {
      const result = await db
        .insert(projects)
        .values({
          name: data.get("name") as string,
          category: data.get("category") as string,
          country: data.get("country") as string,
          startDate,
          endDate,
          commissioningParty: data.get("commissioningParty") as string,
          url: signedURL.split("?")[0],
          description: data.get("description") as string,
          implementors: data.get("implementors") as string,
        })
        .returning()
        .then((res) => res[0]);

      revalidatePath("/admin/projects");

      return {
        status: "success",
        code: 200,
        message: `${result.name} created successfully`,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message:
        "Something went wrong. Unable to create project. Please try again later!",
    };
  }

  // try {
  //   const result = await db
  //     .insert(projects)
  //     .values({
  //       name: parsedData.data.name,
  //       category: parsedData.data.category,
  //       country: parsedData.data.country,
  //       startDate: parsedData.data.startDate.toLocaleString(),
  //       endDate: parsedData.data.endDate.toLocaleString(),
  //       commissioningParty: parsedData.data.commissioningParty,

  //       description: parsedData.data.description,
  //       implementors: parsedData.data.implementors,
  //     })
  //     .returning()
  //     .then((res) => res[0]);

  //   revalidatePath("/admin/projects");

  //   return {
  //     status: "success",
  //     code: 200,
  //     message: `${result.name} created successfully`,
  //   };
  // } catch (error) {
  //   return {
  //     status: "error",
  //     code: 401,
  //     message: `Sorry, unable to create project. Please try again later!`,
  //   };
  // }
};

export const addTeamMemberAction = async (formData: FormData) => {
  const image = formData.get("image") as File;

  // const experience = formData.get("experience") as string;
  // const category = formData.get("experience") as string;

  // const education = formData.get("education") as string;
  // const profile = formData.get("bio") as string;

  const message1 = formData.get("message1") as string;
  const message2 = formData.get("message2") as string;

  // let message = null;
  message1.concat(message2 ?? "");
  // if (message1 && message2) {
  //   message1.concat("2").concat(message2); // Then i will split this text based on '2' and use that when displaying the tope leadership message on the our-team page
  //   message = message1;
  // }

  // const category = formData.get("category") as string;
  // const image = formData.get("image") as File;

  // if (!name || !role || !experience || !education || !profile || !image) {
  //   return {
  //     status: "error",
  //     message: "Sorry, team member creation failed. You have missing fields!",
  //   };
  // }

  const bio = {
    education: formData.get("education") as string,
    profile: formData.get("bio") as string,
    experience: formData.get("experience") as string,
  };

  try {
    // Getting the checksum (sha256)
    const checksum = await computeSHA256(image);

    const signedURL = await getSignedURL(image, checksum);

    const result = await saveImage(signedURL, image);

    if (result.status === 200) {
      const dbResult = await db
        .insert(teamMembers)
        .values({
          name: formData.get("name") as string,
          role: formData.get("role") as string,
          bio,
          category: formData.get("category") as string,
          message: message1,
          url: signedURL.split("?")[0],
        })
        .returning()
        .then((res) => res[0]);

      revalidatePath("/admin/team");
      revalidatePath("/our-team");

      return {
        status: "success",
        message: `Team member ${dbResult.name} created successfully`,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: `Team member creation failed. Try again!`,
    };
  }
};

export const addDonorAction = async (formData: FormData) => {
  const logo = formData.get("logo") as File;

  try {
    // Getting the checksum (sha256)
    const checksum = await computeSHA256(logo);

    const signedURL = await getSignedURL(logo, checksum);

    const result = await saveImage(signedURL, logo);

    if (result.status === 200) {
      const dbResult = await db
        .insert(donors)
        .values({
          name: formData.get("name") as string,
          logo: signedURL.split("?")[0],
          website: formData.get("url") as string,
        })
        .returning()
        .then((res) => res[0]);

      revalidatePath("/admin/partners-and-donors");

      return {
        status: "success",
        message: `Donor ${dbResult.name} created successfully`,
      };
    }
  } catch (error) {
    return {
      message: "Sorry, unable to create donor. Please try again!",
      status: "error",
    };
  }
};

export const addPartnerAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const website = formData.get("url") as string;
  const logo = formData.get("logo") as File;

  if (!name || !website || !logo) {
    return {
      status: "error",
      message: "Sorry! Please fill the missing fields and try again",
    };
  }

  try {
    // Getting the checksum (sha256)
    const checksum = await computeSHA256(logo);

    const signedURL = await getSignedURL(logo, checksum);

    const result = await saveImage(signedURL, logo);

    if (result.status === 200) {
      const dbResult = await db
        .insert(partners)
        .values({
          name,
          logo: signedURL.split("?")[0],
          website,
        })
        .returning()
        .then((res) => res[0]);

      revalidatePath("/admin/partners-and-donors");

      return {
        status: "success",
        message: `Partner ${dbResult.name} created successfully`,
      };
    }
  } catch (error) {
    return {
      message: "Sorry, unable to create partner. Please try again!",
      status: "error",
    };
  }
};

export const addOfficeAction = async (formData: FormData) => {
  // try {
  // Getting the checksum (sha256)

  const dbResult = await db
    .insert(offices)
    .values({
      area: formData.get("area") as string,
      telephone: formData.get("telephone") as string,
      postOfficeBoxNumber: formData.get("postOfficeBoxNumber") as string,
      city: formData.get("city") as string,
      country: formData.get("country") as string,
      plotNumber: formData.get("plotNumber") as string,
    })
    .returning()
    .then((res) => res[0]);

  revalidatePath("/amin/offices");

  //   return {
  //     status: "success",
  //     message: ` Office created successfully`,
  //   };
  // } catch (error) {
  //   return {
  //     status: "error",
  //     message: `Office creation failed. Try again!`,
  //   };
  // }
};

export const addJobOpenningAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const formatter = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  });

  const _ed = new Date(
    formData.get("close-date") as string
  ).toLocaleDateString();
  const endDate = formatter.format(new Date(_ed));

  const pdf = formData.get("pdf") as File;

  if (!title || !description || !endDate || !pdf) {
    return {
      status: "error",
      message: "Sorry, job opening creation failed. You have missing fields!",
    };
  }

  try {
    // Getting the checksum (sha256)
    const checksum = await computeSHA256(pdf);

    const signedURL = await getSignedURL(pdf, checksum);

    const result = await saveImage(signedURL, pdf);

    if (result.status === 200) {
      const dbResult = await db
        .insert(jobs)
        .values({ title, pdf: signedURL.split("?")[0], description, endDate })
        .returning()
        .then((res) => res[0]);

      revalidatePath("/amin/careers-and-jobs");

      return {
        status: "success",
        message: `Job opening ${dbResult.title} created successfully`,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: `Job opening creation failed. Try again!`,
    };
  }
};

