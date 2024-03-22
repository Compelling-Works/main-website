"use server";

import bcrypt from "bcrypt";

import {
  donors,
  jobs,
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
  const formData = Object.fromEntries(data); //convert data object into a regular javascript object
  const parsedData = ProjectFormSchema.safeParse(formData); // check if that data is valid(matches what the schema expects)

  if (!parsedData.success) {
    return {
      status: "error",
      message: "Invalid form data",
    };
  }

  try {
    const result = await db
      .insert(projects)
      .values({
        name: parsedData.data.name,
        category: parsedData.data.category,
        country: parsedData.data.country,
        startDate: parsedData.data.startDate.toLocaleString(),
        endDate: parsedData.data.endDate.toLocaleString(),
        commissioningParty: parsedData.data.commissioningParty,

        description: parsedData.data.description,
        implementors: parsedData.data.implementors,
      })
      .returning()
      .then((res) => res[0]);

    revalidatePath("/admin/projects");

    return {
      status: "success",
      code: 200,
      message: `${result.name} created successfully`,
    };
  } catch (error) {
    return {
      status: "error",
      code: 401,
      message: `Sorry, unable to create project. Please try again later!`,
    };
  }
};

export const addTeamMemberAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const experience = formData.get("experience") as string;
  const education = formData.get("education") as string;
  const profile = formData.get("profile") as string;

  const message1 = formData.get("message1") as string;
  const message2 = formData.get("message2") as string;

  let message = null;
  if (message1 && message2) {
    message1.concat("2").concat(message2); // Then i will split this text based on '2' and use that when displaying the tope leadership message on the our-team page
    message = message1;
  }

  const category = formData.get("category") as string;
  const image = formData.get("image") as File;

  if (!name || !role || !experience || !education || !profile || !image) {
    return {
      status: "error",
      message: "Sorry, team member creation failed. You have missing fields!",
    };
  }

  const bio = {
    education,
    profile,
    experience,
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
          name,
          role,
          bio,
          category,
          message,
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
        .insert(donors)
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

export const addJobOpenningAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const endDate = (formData.get("close-date") as string).toLocaleString();
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
