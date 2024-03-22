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
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAdminUserAction } from "@/actions/create-actions";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import {
  AdminUserCreateSchemaType,
  AdminUserFormSchema,
} from "@/zod/zod-schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function AdminMemberForm() {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<AdminUserCreateSchemaType>({
    resolver: zodResolver(AdminUserFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: undefined,
    },
  });

  const fileRef = form.register("image");

  async function onSubmit(data: AdminUserCreateSchemaType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("image", data.image[0]);

    const result = await addAdminUserAction(formData);

    if (!result) {
      toast({
        title: "User creation error",
        description: "Unable to create user",
        variant: "destructive",
      });
    }

    if (result?.status === "error") {
      toast({
        title: "User creation error",
        description: result?.message,
        variant: "destructive",
      });
      return;
    }
    setModalOpen(false);
    toast({
      title: "User creation",
      description: result?.message,
      variant: "default",
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
            className="w-full min-h-[200px]"
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
            <div className="my-2">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                {...form.register("username")}
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.username,
                })}
              />
              {form.formState.errors.username && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.username.message}
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

            <div>
              <Label>Admin member image</Label>

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input type="file" {...fileRef} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
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
                  <span className="mr-3">Creating user</span>
                </>
              ) : (
                "Create User"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
