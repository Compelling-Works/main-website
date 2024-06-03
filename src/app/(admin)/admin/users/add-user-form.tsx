"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { RegisterSchema, RegisterSchemaType } from "@/zod/zod-schemas";
import { Form } from "@/components/ui/form";
import { registerUserAction } from "@/actions/auth-actions";

export default function AdminMemberForm() {
  const [modalOpen, setModalOpen] = useState(false);

  const { toast } = useToast();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterSchemaType) {
    // try {
    const result = await registerUserAction(data);

    if (result?.success === false) {
      toast({
        title: "Something went wrong",
        description: result?.message,
        variant: "destructive",
      });

      return;
    }

    setModalOpen(false);
    toast({
      title: "User aaccount creation",
      description: result?.message,
      variant: "destructive",
    });

    form.reset();
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Add new admin account
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" min-h-[200px]"
          >
            <div className="">
              <Label htmlFor="name">Name</Label>
              <Input
                {...form.register("name")}
                type="text"
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.name,
                })}
              />
              {form.formState.errors.name && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.name.message}
                </span>
              )}
            </div>

            <div className="mb-2">
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Enter your company email."
                {...form.register("email")}
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.email,
                })}
                type="email"
              />
              {form.formState.errors.email && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>

            <div className="">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                {...form.register("password")}
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.password,
                })}
              />
              {form.formState.errors.password && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.password.message}
                </span>
              )}
            </div>
            <div className="">
              <Label htmlFor="password">Confirm Password</Label>

              <Input
                type="password"
                {...form.register("confirmPassword")}
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.confirmPassword,
                })}
              />
              {form.formState.errors.confirmPassword && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.confirmPassword.message}
                </span>
              )}
            </div>

            <Button
              disabled={form.formState.isSubmitting}
              className={cn("w-full mt-2", {
                "disabled:bg-opacity-75 ": form.formState.isSubmitting,
              })}
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader className="size-4 animate-spin mr-2" />
                  <span className="mr-3">Creating user account...</span>
                </>
              ) : (
                "Create user account"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
