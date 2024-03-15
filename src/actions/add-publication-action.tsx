"use server";

import { projects, publications } from "@/database/schema";
import getSignedURL from "./getSignedURL";

import { db } from "@/database/index";
import { revalidatePath } from "next/cache";

const computeSHA256 = async (file: File) => {
  //
  /**
   * Function hashes the file (using the SHA-256 security standard), turns it into a string which we then send to our s3 bucket server
   *
   * This validates that by the time it gets to s3, nothing bad happened to the file
   */

  const buffer = await file.arrayBuffer();
  const hasBuffer = await crypto.subtle.digest("SHA-256", buffer);

  const hasArray = Array.from(new Uint8Array(hasBuffer));
  const hashHex = hasArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  return hashHex;
};

const addPublicationAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  //   const image = formData.get("image") as File;
  const articleUrl = formData.get("url") as string;
  const date = (formData.get("date") as string).toLocaleString();
  const type = formData.get("type") as string;
  const description = formData.get("description") as string;

  // const fileUrl = formData.get("pdf_file") as File;

  const dbResult = await db
    .insert(publications)
    .values({
      title,
      type,
      date,
      description,
      articleUrl,
      // implementors,
    })
    .returning()
    .then((res) => res[0]);

  //   console.log("Result", dbResult);
  revalidatePath("/admin/publications");

  return { message: "success", title: dbResult.title};

  //   try {
  //     // Getting the checksum (sha256)
  //     const checksum = await computeSHA256(image);

  //     const signedURL = await getSignedURL(image, checksum);

  //     const result = await fetch(signedURL, {
  //       method: "PUT",
  //       body: image,
  //       headers: {
  //         "Content-Type": image.type,
  //       },
  //     });

  //     if (result.status === 200) {
  //       const dbResult = await db
  //         .insert(projects)
  //         .values({
  //           name,
  //           category,
  //           about,
  //           country,
  //           startDate,
  //           endDate,
  //           commissioningParty,
  //         })
  //         .returning()
  //         .then((res) => res[0]);

  //       console.log("Result", dbResult);
  //     }

  //     revalidatePath("/amin/team");
  //   } catch (error) {
  //     console.error("error", error);
  //   }
};

export default addPublicationAction;
