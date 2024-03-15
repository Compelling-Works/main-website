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
import { useToast } from "@/components/ui/use-toast";
import FormButton from "@/components/shared/form-button";
import { addJobOpenningAction } from "@/actions/create-actions";

const JobOpeningForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const clientAction = async (formData: FormData) => {
    const result = await addJobOpenningAction(formData);

    if (result?.status === "error") {
      toast({
        title: "Job creation error",
        description: result.message,
        variant: "destructive",
      });
      return;
    }
    setModalOpen(false);
    toast({
      title: "Job creation",
      description: result?.message,
    });
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button>Add New</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Add a new job opening
            </DialogTitle>
          </DialogHeader>

          <form action={clientAction} className="w-full min-h-[200px]">
            <div className="">
              <Label htmlFor="title">Title</Label>
              <Input type="text" name="title" />
            </div>
            <div className="my-2 w-full">
              <Label htmlFor="description">Description</Label>
              <Input className="w-full" type="text" name="description" />
            </div>

            <div className="mb-2 space-y-2">
              <Label htmlFor="Close date">Close Date</Label>

              <Input
                placeholder="Enter the last date of receiving applications..."
                name="close-date"
                type="date"
              />
            </div>

            <div className="">
              <Label htmlFor="terms">PDF</Label>
              <Input type="file" name="pdf" />
            </div>

            <FormButton />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobOpeningForm;
