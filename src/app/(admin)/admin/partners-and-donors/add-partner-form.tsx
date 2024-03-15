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
import { addPartnerAction } from "@/actions/create-actions";

const AddPartnerForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const clientAction = async (formData: FormData) => {
    const result = await addPartnerAction(formData);

    if (result?.status === "error") {
      toast({
        title: "Partner Creation",
        description: result.message,
        variant: "destructive",
      });
      return;
    }

    setModalOpen(false);
    toast({
      title: "Partner Creation",
      description: `${result?.message}`,
      variant: "default",
    });
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button>Add Partner</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Add a new partner</DialogTitle>
          </DialogHeader>

          <form action={clientAction} className="w-full">
            <div className="">
              <Label htmlFor="terms">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Add partner name here.."
              />
            </div>

            <div className="">
              <Label htmlFor="Website URL">Website URL</Label>
              <Input
                type="text"
                name="url"
                placeholder="Add url to the partner's website here.."
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

export default AddPartnerForm;
