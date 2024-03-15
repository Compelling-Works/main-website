"use client";
import { ChangeEvent, FormEvent, useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import editTeamMemberAction from "@/actions/edit-team-member-action";
import TeamMemberForm from "./add-member-form";

export type TeamMember = {
  [key: string]: number | string | undefined;
  name: string;
  role: string;
  category: string;
  message?: string;
  profile: string;
  education: string;
  experience: string;
};

type DynamicInputProps = {
  id: number;
  name: string;
};

const EditTeamMemberForm = ({ data }: any) => {
  // const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(true);
  const [name, setName] = useState("");

  const [member, setMember] = useState<TeamMember>({
    name: "",
    role: "",
    category: "",
    message: "",
    profile: "",
    education: "",
    experience: "",
  });

  function setField(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const updatedDetails: TeamMember = member;

    updatedDetails[name] = value;
    setMember(updatedDetails);
  }

  const { toast } = useToast();

  const clientAction = async (formData: FormData) => {
    const result = await editTeamMemberAction(formData);

    if (result !== null) {
      setModalOpen(false);
      toast({
        title: "User Editing",
        description: "User edited successfully",
        variant: "default",
      });
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(member);
  }

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Edit team member details
            </DialogTitle>
          </DialogHeader>

          {/* <form action={clientAction} className="w-full min-h-[200px]"> */}
          <form onSubmit={handleSubmit} className="w-full min-h-[200px]">
            <div className="">
              <Label htmlFor="terms">Name</Label>
              <Input
                type="text"
                name="name"
                // value={data?.name}
                value={member.name}
                onChange={setField}
                //  onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="my-2 w-full">
                <Label htmlFor="terms">Role</Label>
                <Input
                  className="w-full"
                  type="text"
                  name="role"
                  value={member?.role}
                />
              </div>
              <div className="my-2 w-full">
                <Label htmlFor="terms">Category</Label>
                <Select
                  // onValueChange={(e) => setCategory(e)}
                  name="category"
                  value={member.category}
                >
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

            {member.category === "Our Leadership" ? (
              <div className="mb-2">
                <Label htmlFor="terms">Message</Label>
                <Textarea
                  placeholder="Type here message from the team leaders"
                  name="message"
                  value={member.message}
                />
              </div>
            ) : (
              ""
            )}
            <div className="mb-2 space-y-2">
              <Label htmlFor="terms">Bio Data</Label>

              <Textarea
                placeholder="Enter the team member profile information here..."
                name="profile"
                // value={member.?bio.profile!}
              />
              <Textarea
                placeholder="Enter the education background information here..."
                name="education"
                // value={member.?bio.education!}
              />

              <Textarea
                placeholder="Enter the team member working experience here."
                name="experience"
                // value={member.?bio?.experience!}
              />
            </div>

            {/* <div className="">
              <Label htmlFor="terms">Image</Label> */}
            <Input name="url" type="hidden" />
            {/* </div> */}

            <Button className="mt-4 w-full" type="submit">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditTeamMemberForm;
