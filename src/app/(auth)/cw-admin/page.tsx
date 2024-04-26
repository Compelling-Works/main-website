"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/zod/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchemaType) {
    console.log(data);
    try {
      //  await createApplication({
      //    name: data.name,
      //    letter,
      //    nationalId,
      //    proofOfPayment,
      //    statutoryDeclaration,
      //    proofOfLossPoliceReference,
      //  });

      toast({
        title: "Login upload success",
        description: "You have successfully logged into the application",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "Unable to login to the application. Please try again later ",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="rounded-md bg-white p-8 shadow dark:bg-gray-900 w-[500px] ">
      <Image
        src="/images/horizontal_logo.png"
        width="200"
        height="200"
        alt="Compelling works limited logo"
        className="mx-auto"
      />

      <div>
        <h3 className="font-medium leading-6 text-blue-700 text-center text-2xl my-3">
          Login to your account
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-2"
          >
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                {...form.register("email")}
                autoComplete="off"
                type="email"
              />
              {form.formState.errors.email && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                {...form.register("password")}
                autoComplete="off"
                type="password"
              />
              {form.formState.errors.password && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.password.message}
                </span>
              )}
            </div>
            <div className="my-2">
              <Button
                disabled={form.formState.isSubmitting}
                className={cn(
                  "w-full hover:bg-blue-700 bg-blue-600 text-white text-xl",
                  {
                    "disabled:bg-opacity-75 ": form.formState.isSubmitting,
                  }
                )}
                type="submit"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin mr-2" />
                    <span className="mr-3">Logging in...</span>
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>

            <p className="text-sm flex gap-2 items-center">
              <span>Don&apos;t have an account?</span>
              <span>
                <Link href="/cw-admin/register" className="text-blue-600">
                  Register here
                </Link>
              </span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
