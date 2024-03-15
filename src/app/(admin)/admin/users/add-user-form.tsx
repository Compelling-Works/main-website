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

const AdminMemberForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<AdminUserCreateSchemaType>({
    resolver: zodResolver(AdminUserFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: AdminUserCreateSchemaType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    const result = await addAdminUserAction(formData);

    if (result.status === "error") {
      toast({
        title: "User creation error",
        description: result.message,
        variant: "destructive",
      });
      return;
    }
    setModalOpen(false);
    toast({
      title: "User creation",
      description: result.message,
      variant: "default",
    });
  }
  const [modalOpen, setModalOpen] = useState(false);

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full min-h-[200px]"
        >
          <div className="">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name")}
              type="text"
              className={cn("w-full", {
                "ring-1 ring-red-600": errors.name,
              })}
            />
            {errors.name && (
              <span className="text-red-600 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="my-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              {...register("username")}
              className={cn("w-full", {
                "ring-1 ring-red-600": errors.username,
              })}
            />
            {errors.username && (
              <span className="text-red-600 text-xs">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Enter your company email."
              {...register("email")}
              className={cn("w-full", {
                "ring-1 ring-red-600": errors.email,
              })}
              type="email"
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              {...register("password")}
              className={cn("w-full", {
                "ring-1 ring-red-600": errors.password,
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="">
            <Label htmlFor="password">Confirm Password</Label>

            <Input
              type="password"
              {...register("confirmPassword")}
              className={cn("w-full", {
                "ring-1 ring-red-600": errors.confirmPassword,
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-600 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button
            disabled={isSubmitting}
            className={cn("w-full mt-2", {
              "disabled:bg-opacity-75 ": isSubmitting,
            })}
          >
            {isSubmitting ? (
              <>
                <Loader className="h-5 w-5 animate-spin mr-2" />
                <span className="mr-3">Creating user</span>
              </>
            ) : (
              "Create User"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminMemberForm;
