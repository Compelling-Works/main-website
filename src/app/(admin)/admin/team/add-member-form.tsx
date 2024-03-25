"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { addTeamMemberAction } from "@/actions/create-actions";
import {
  TeamMemberFormSchema,
  TeamMemberFormSchemaType,
} from "@/zod/zod-schemas";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const TeamMemberForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<TeamMemberFormSchemaType>({
    resolver: zodResolver(TeamMemberFormSchema),
    defaultValues: {
      name: "",
      bio: "",
      category: "",
      education: "",
      experience: "",
      message1: "",
      message2: "",
      role: "",
      image: undefined,
    },
  });

  const fileRef = form.register("image");

  async function onSubmit(data: TeamMemberFormSchemaType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("role", data.role);
    formData.append("bio", data.bio);
    formData.append("category", data.category);
    formData.append("experience", data.experience);
    formData.append("message1", data.message1 ?? "");
    formData.append("message2", data.message2 ?? "");

    formData.append("image", data.image[0]);

    try {
      const result = await addTeamMemberAction(formData);

      setModalOpen(false);
      toast({
        title: "User creation success",
        description: result?.message,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Team member creation error",
        description:
          "Sorry, unable to add team member. Please try again later!",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-[800px]">
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button>Add New</Button>
        </DialogTrigger>
        <DialogContent className="w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              Add a new team member
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" min-h-[200px]"
            >
              <div className="">
                <Label htmlFor="terms">Name</Label>
                <Input type="text" {...form.register("name")} />
                {form.formState.errors.name && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex gap-2 items-center">
                <div className="my-2 w-full">
                  <Label htmlFor="terms">Role</Label>

                  <Input
                    className="w-full"
                    type="text"
                    {...form.register("role")}
                  />

                  {form.formState.errors.role && (
                    <span className="text-red-600 text-xs">
                      {form.formState.errors.role.message}
                    </span>
                  )}
                </div>
                <div className="my-2 w-full">
                  <Label htmlFor="terms">Category</Label>

                  <Controller
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your response" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Our Leadership">
                            Leadership
                          </SelectItem>
                          <SelectItem value="Creative Team">
                            Creative Team
                          </SelectItem>
                          <SelectItem value="Intern">Intern</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              {form.getValues().category === "Our Leadership" && (
                <div className="mb-2 space-y-1">
                  <Label htmlFor="terms">Message</Label>
                  <Textarea
                    {...form.register("message1")}
                    placeholder="Enter here the first paragraph of the message from the team leaders"
                  />
                  {form.formState.errors.message1 && (
                    <span className="text-red-600 text-xs">
                      {form.formState.errors.message1.message}
                    </span>
                  )}
                  <Textarea
                    {...form.register("message2")}
                    placeholder="Enter here the second paragraph of the message from the team leaders"
                  />

                  {form.formState.errors.message2 && (
                    <span className="text-red-600 text-xs">
                      {form.formState.errors.message2.message}
                    </span>
                  )}
                </div>
              )}

              <div className="mb-2 space-y-2">
                <Label htmlFor="terms">Bio Data</Label>

                <div>
                  <Textarea
                    placeholder="Enter the team member profile information here..."
                    {...form.register("bio")}
                  />
                  {form.formState.errors.bio && (
                    <span className="text-red-600 text-xs">
                      {form.formState.errors.bio.message}
                    </span>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Enter the education background information here..."
                    {...form.register("education")}
                  />
                  {form.formState.errors.education && (
                    <span className="text-red-600 text-xs">
                      {form.formState.errors.education.message}
                    </span>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Enter the team member working experience here."
                    {...form.register("experience")}
                  />
                  {form.formState.errors.experience && (
                    <span className="text-red-600 text-xs">
                      {form.formState.errors.experience.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <Label>Team member image</Label>

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
                    <span className="mr-3">Adding team member</span>
                  </>
                ) : (
                  "Add team member"
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamMemberForm;
