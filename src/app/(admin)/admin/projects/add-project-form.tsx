"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

import { addprojectAction } from "@/actions/create-actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { ProjectFormSchema, ProjectFormSchemaType } from "@/zod/zod-schemas";

const AddProjectForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ProjectFormSchemaType>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: "",
      category: "",
      country: "",
      implementors: "",
      description: "",
      commissioningParty: "",
      startDate: undefined,
      endDate: undefined,
    },
  });
  const [modalOpen, setModalOpen] = useState(false);

  async function onSubmit(data: ProjectFormSchemaType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("country", data.country);
    formData.append("category", data.category);
    formData.append("implementors", data.implementors);
    formData.append("commissioningParty", data.commissioningParty);
    formData.append("description", data.description);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);

    const result = await addprojectAction(formData);

    if (result.status === "error") {
      toast({
        title: "Project creation error",
        description: result.message,
        variant: "destructive",
      });
      return;
    }

    reset(); //resetting the form
    setModalOpen(false);
    toast({
      title: "Project creation success",
      description: result.message,
      variant: "default",
    });
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Add a new project</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full min-h-[200px]"
        >
          <div className="">
            <Label htmlFor="terms">Name</Label>

            <Input
              type="text"
              {...register("name")}
              placeholder="enter project name"
            />
            {errors.name && (
              <span className="text-red-600 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="my-2">
              <Label htmlFor="terms">Start Date</Label>
              <Input
                type="date"
                {...register("startDate")}
                className="w-full"
              />
              {errors.startDate && (
                <span className="text-red-600 text-xs">
                  {errors.startDate.message}
                </span>
              )}
            </div>
            <div className="my-2">
              <Label htmlFor="end date">End Date</Label>
              <Input type="date" {...register("endDate")} className="w-full" />
              {errors.endDate && (
                <span className="text-red-600 text-xs">
                  {errors.endDate.message}
                </span>
              )}
            </div>
          </div>
          <div className="my-2 w-full">
            <Label htmlFor="terms">Category</Label>
            <Input
              type="text"
              placeholder="Enter project category"
              {...register("category")}
              className="w-full"
            />
            {errors.category && (
              <span className="text-red-600 text-xs">
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="terms">Implementors</Label>
            <Input
              type="text"
              {...register("implementors")}
              placeholder="enter implementors in eg, implementor a, implementor b, etc"
            />
            {errors.implementors && (
              <span className="text-red-600 text-xs">
                {errors.implementors.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="my-2">
              <Label htmlFor="funder">Commisionary party</Label>
              <Input
                type="text"
                {...register("commissioningParty")}
                className="w-full"
              />
              {errors.commissioningParty && (
                <span className="text-red-600 text-xs">
                  {errors.commissioningParty.message}
                </span>
              )}
            </div>
            <div className="my-2">
              <Label htmlFor="end date">Country</Label>
              <Input type="text" {...register("country")} className="w-full" />
              {errors.country && (
                <span className="text-red-600 text-xs">
                  {errors.country.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Type the project description here."
              {...register("description")}
            />
            {errors.description && (
              <span className="text-red-600 text-xs">
                {errors.description.message}
              </span>
            )}
          </div>
          <Button
            disabled={isSubmitting}
            className={cn("mt-4 w-full", { "bg-opacity-75": isSubmitting })}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <Loader className="size-6 mr-2 animate-spin" />
                <span>Creating project..</span>
              </>
            ) : (
              "Create project"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectForm;
