"use server";

import { ContactFormSchema } from "@/zod/zod-schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

enum EmailSubject {
  client = "Email from client contact form",
  consultant = "Email from consultant contact form",
  intern = "Email from intern contact form",
}

export async function sendEmail(data: FormData) {
  const formData = Object.fromEntries(data); //convert data object into a regular javascript object
  const parsedData = ContactFormSchema.safeParse(formData); // check if that data is valid(matches what the schema expects)

  if (!parsedData.success) {
    return {
      status: "error",
      message: "Invalid form data",
    };
  }

  const type = parsedData.data.type;

  const emailSubject =
    type === "intern"
      ? EmailSubject.intern
      : type === "consultant"
      ? EmailSubject.consultant
      : EmailSubject.client;

  const to = "jacob.loor@compelling.works";

  const result = await resend.emails.send({
    from: "Compelling works main website  <onboarding@resend.dev>",
    to: to,
    subject: emailSubject,
    reply_to: parsedData.data.email,
    html: `<p>Hello team, this is an email from <strong>${parsedData.data.name}</strong></p><br /><p>${parsedData.data.message}</p> <h4>Email sent from the ${type} contact form</h4>`,
  });

  if (!result.data) {
    return {
      message: "Sorry, unable to send email. Try again!",
      status: "error",
    };
  }

  return {
    message:
      "Email sent successfully. We shall contact you as soon as possible!",
    status: "success",
  };
}
