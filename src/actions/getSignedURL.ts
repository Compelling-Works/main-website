"use server"

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import crypto from "crypto"

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  },
});

// Gets us a random file name which we shall use in s3
const generateFileName = (bytes =32) => crypto.randomBytes(bytes).toString("hex")

export default async function getSignedURL(file: File, checkSum: string) {

   const putObject = new PutObjectCommand({
     Bucket: process.env.AWS_S3_BUCKET_NAME!,
     Key: generateFileName(),
     ContentType: file.type,
     ChecksumSHA256: checkSum, // This
   });

   const signedUrl = await getSignedUrl(s3, putObject, {
      expiresIn: 60,
   })

  return signedUrl
}
