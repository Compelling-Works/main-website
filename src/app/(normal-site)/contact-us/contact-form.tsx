"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/sendEmail";
import { cn } from "@/lib/utils";
import { ContactFormSchemaType, ContactFormSchema } from "@/zod/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";

type EmailType = {
  type: "intern" | "consultant" | "client";
  heading?: string;
};

function ContactForm({ type, heading }: EmailType) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      type: type,
    },
  });

  async function onSubmit(data: ContactFormSchemaType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("type", data.type);

    const result = await sendEmail(formData);

    if (result.status === "error") {
      toast({
        title: "Email sending error",
        description: result.message,
        variant: "destructive",
      });
      return;
    }

    reset(); // resetting the form fields
    toast({
      title: "Email sending success",
      description: result.message,
      variant: "default",
    });
  }
  async function clientAction(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.status === "error") {
      toast({
        title: "Email sending error",
        description: result.message,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Email sending success",
      description: result.message,
      variant: "default",
    });
  }
  return (
    <form
      // action={clientAction}
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl px-7 w-50 border-2 border-zinc-100 shadow-lg min-h-[350px]"
    >
      <h3 className="text-center py-4 text-lg">
        {heading ? `${heading}` : "Contact us today!"}
      </h3>
      <div className="">
        <Label htmlFor="terms">Name</Label>
        <Input
          type="text"
          // name="name"
          placeholder="Enter your name"
          className="w-full"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-600 text-xs">{errors.name.message}</span>
        )}
      </div>

      <div className="">
        <Label htmlFor="terms">Email</Label>
        <Input
          type="email"
          // name="email"
          placeholder="Enter your email address"
          className="w-full"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-600 text-xs">{errors.email.message}</span>
        )}
      </div>

      <div className="">
        <Label htmlFor="terms">Message</Label>

        <Textarea
          placeholder="Type your message here."
          {...register("message")}
        />
        {errors.message && (
          <span className="text-red-600 text-xs">{errors.message.message}</span>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        className={cn("mt-4 mb-2 w-full", { "bg-opacity-75": isSubmitting })}
        type="submit"
      >
        {isSubmitting ? (
          <>
            <Loader className="size-6 mr-2 animate-spin" />
            <span>Sending email...</span>
          </>
        ) : (
          "Send email"
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
