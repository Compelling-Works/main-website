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
import FormButton from "@/components/shared/form-button";
import { addTeamMemberAction } from "@/actions/create-actions";

const TeamMemberForm = () => {
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const clientAction = async (formData: FormData) => {
    try {
      const result = await addTeamMemberAction(formData);

      setModalOpen(false);
      toast({
        title: "User creation success",
        description: result?.message,
      });
    } catch (error) {
      toast({
        title: "Team member creation error",
        description:
          "Sorry, unable to add team member. Please try again later!",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button>Add New</Button>
        </DialogTrigger>
        <DialogContent className="w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              Add a new team member
            </DialogTitle>
          </DialogHeader>

          <form action={clientAction} className="min-h-[200px] w-full">
            <div className="">
              <Label htmlFor="terms">Name</Label>
              <Input type="text" name="name" />
              {/* <Input type="text" {...register("name")} /> */}
              {/* {errors.name && (
                <span className="text-red-600 text-xs">
                  {errors.name.message}
                </span>
              )} */}
            </div>
            <div className="flex gap-2 items-center">
              <div className="my-2 w-full">
                <Label htmlFor="terms">Role</Label>
                <Input className="w-full" type="text" name="role" />
                {/* <Input className="w-full" type="text" {...register("role")} /> */}

                {/* {errors.role && (
                  <span className="text-red-600 text-xs">
                    {errors.role.message}
                  </span>
                )} */}
              </div>
              <div className="my-2 w-full">
                <Label htmlFor="terms">Category</Label>
                <Select onValueChange={(e) => setCategory(e)} name="category">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a member category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Our Leadership">Leadership</SelectItem>
                    <SelectItem value="Creative Team">Creative Team</SelectItem>
                    <SelectItem value="Intern">Intern</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {category === "Our Leadership" ? (
              <>
                <div className="mb-2 space-y-2">
                  <Label htmlFor="terms">Message</Label>
                  <Textarea
                    placeholder="Enter here the first paragraph of the message from the team leaders"
                    name="message1"
                  />
                  <Textarea
                    placeholder="Enter here the second paragraph of the message from the team leaders"
                    name="message2"
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div className="mb-2 space-y-2">
              <Label htmlFor="terms">Bio Data</Label>

              <div>
                <Textarea
                  placeholder="Enter the team member profile information here..."
                  name="profile"
                  // {...register("profile")}
                />
                {/* {errors.profile && (
                  <span className="text-red-600 text-xs">
                    {errors.profile.message}
                  </span>
                )} */}
              </div>
              <div>
                <Textarea
                  placeholder="Enter the education background information here..."
                  name="education"
                  // {...register("education")}
                />
                {/* {errors.education && (
                  <span className="text-red-600 text-xs">
                    {errors.education.message}
                  </span>
                )} */}
              </div>

              <div>
                <Textarea
                  placeholder="Enter the team member working experience here."
                  name="experience"
                  // {...register("experience")}
                />
                {/* {errors.experience && (
                  <span className="text-red-600 text-xs">
                    {errors.experience.message}
                  </span>
                )} */}
              </div>
            </div>

            <div className="">
              <Label htmlFor="terms">Image</Label>
              <Input type="file" name="image" />
              {/* <Input type="file" {...register("image")} /> */}
              {/* {errors.image && (
                <span className="text-red-600 text-xs">
                  {errors.image.message}
                </span>
              )} */}
            </div>

            <FormButton />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamMemberForm;
