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

import { addprojectAction } from "@/actions/create-actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { ProjectFormSchema, ProjectFormSchemaType } from "@/zod/zod-schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const AddProjectForm = () => {
  const { toast } = useToast();

  const form = useForm<ProjectFormSchemaType>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: "",
      category: "",
      country: "",
      implementors: "",
      description: "",
      commissioningParty: "",
      image: undefined,
      startDate: undefined,
      endDate: undefined,
    },
  });
  const [modalOpen, setModalOpen] = useState(false);

  const fileRef = form.register("image");

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
    formData.append("image", data.image[0]);

    try {
      const result = await addprojectAction(formData);

      setModalOpen(false);
      toast({
        title: "Project creation success",
        description: result?.message,
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Somethign went wrong",
        description: "Unable to add project. Please try again later!",
        variant: "destructive",
      });
      return;
    }
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

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full min-h-[200px]"
          >
            <div className="">
              <Label htmlFor="terms">Name</Label>

              <Input
                type="text"
                {...form.register("name")}
                placeholder="enter project name"
              />
              {form.formState.errors.name && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.name.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="my-2">
                <Label htmlFor="terms">Start Date</Label>
                <Input
                  type="date"
                  {...form.register("startDate")}
                  className="w-full"
                />
                {form.formState.errors.startDate && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.startDate.message}
                  </span>
                )}
              </div>
              <div className="my-2">
                <Label htmlFor="end date">End Date</Label>
                <Input
                  type="date"
                  {...form.register("endDate")}
                  className="w-full"
                />
                {form.formState.errors.endDate && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.endDate.message}
                  </span>
                )}
              </div>
            </div>
            <div className="my-2 w-full">
              <Label htmlFor="terms">Category</Label>
              <Input
                type="text"
                placeholder="Enter project category"
                {...form.register("category")}
                className="w-full"
              />
              {form.formState.errors.category && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.category.message}
                </span>
              )}
            </div>

            <div className="">
              <Label htmlFor="terms">Implementors</Label>
              <Input
                type="text"
                {...form.register("implementors")}
                placeholder="enter implementors in eg, implementor a, implementor b, etc"
              />
              {form.formState.errors.implementors && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.implementors.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="my-2">
                <Label htmlFor="funder">Commisionary party</Label>
                <Input
                  type="text"
                  {...form.register("commissioningParty")}
                  className="w-full"
                />
                {form.formState.errors.commissioningParty && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.commissioningParty.message}
                  </span>
                )}
              </div>
              <div className="my-2">
                <Label htmlFor="end date">Country</Label>
                <Input
                  type="text"
                  {...form.register("country")}
                  className="w-full"
                />
                {form.formState.errors.country && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.country.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Type the project description here."
                {...form.register("description")}
              />
              {form.formState.errors.description && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.description.message}
                </span>
              )}
            </div>

            <div className="my-2">
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
              className={cn("mt-4 w-full", {
                "bg-opacity-75": form.formState.isSubmitting,
              })}
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader className="size-6 mr-2 animate-spin" />
                  <span>Creating project..</span>
                </>
              ) : (
                "Create project"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectForm;
