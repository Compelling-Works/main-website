"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import FormButton from "@/components/shared/form-button";
import { addDonorAction } from "@/actions/create-actions";

const AddDonorForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const clientAction = async (formData: FormData) => {
    const result = await addDonorAction(formData);

    if (result?.status === "error") {
      toast({
        title: "Donor Creation",
        description: result.message,
        variant: "destructive",
      });
      return;
    }

    setModalOpen(false);
    toast({
      title: "Donor Creation",
      description: result?.message,
    });
  };

  // async function onSubmit(data: DonorFormSchemaType) {
  //   const formData = new FormData();
  //   formData.append("name", data.name);
  //   // formData.append("file", data.country);

  //   const result = await addDonorAction(formData);

  //   if (result.status === "error") {
  //     toast({
  //       title: "Project creation error",
  //       description: result.message,
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   setModalOpen(false);
  //   toast({
  //     title: "Project creation success",
  //     description: result.message,
  //     variant: "default",
  //   });
  // }

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button>Add Donor</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Add a new donor</DialogTitle>
          </DialogHeader>

          <form action={clientAction} className="w-full">
            <div className="">
              <Label htmlFor="terms">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Add donor name here.."
              />
            </div>
            <div className="">
              <Label htmlFor="Website URL">Website URL</Label>
              <Input
                type="text"
                name="url"
                placeholder="Add url to the donor's website here.."
              />
            </div>

            <div className="">
              <Label htmlFor="Logo">Logo</Label>
              <Input type="file" name="logo" />
            </div>

            <FormButton />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDonorForm;
