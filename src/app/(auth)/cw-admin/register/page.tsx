"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "@/zod/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { registrationAction } from "@/actions/auth-actions";

export default function RegisterForm() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterSchemaType) {
    try {
      const result = await registrationAction(data);

      console.log(result);

      toast({
        title: "Registration success",
        description: "You have successfully created an account",
        variant: "default",
      });

      // form.reset();
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
    <div className="rounded-md bg-white p-8 shadow-xl dark:bg-gray-900 w-[500px] ">
      <Image
        src="/images/horizontal_logo.png"
        width={200}
        height={50}
        alt="Compelling works limited logo"
        className="w-[200px] h-auto mx-auto"
      />

      <div>
        <h3 className="font-medium leading-6 text-blue-700 text-center text-2xl my-3">
          Create your account
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-2"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input {...form.register("name")} autoComplete="off" />
              {form.formState.errors.name && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.name.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input {...form.register("username")} autoComplete="off" />
              {form.formState.errors.username && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.username.message}
                </span>
              )}
            </div>
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
            <div>
              <Label htmlFor="confirm password">Confirm Password</Label>
              <Input
                {...form.register("confirmPassword")}
                autoComplete="off"
                type="password"
              />
              {form.formState.errors.confirmPassword && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.confirmPassword.message}
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
                    <span className="mr-3">Creating account...</span>
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </div>

            <p className="text-sm flex gap-2 items-center">
              <span>Already have an account?</span>
              <span>
                <Link href="/cw-admin" className="text-blue-600">
                  Login here
                </Link>
              </span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
