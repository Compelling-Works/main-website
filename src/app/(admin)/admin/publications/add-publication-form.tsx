"use client";

import addPublicationAction from "@/actions/add-publication-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import FormButton from "@/components/shared/form-button";

const AddPublicationForm = () => {
  const { toast } = useToast();

  const [type, setType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const clientAction = async (formData: FormData) => {
    const result = await addPublicationAction(formData);

    if (result.message === "success") {
      setModalOpen(false);
      toast({
        title: "Publication Creation",
        description: `Publication created successfully`,
        variant: "default",
      });
    }
  };

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Add a new publication
          </DialogTitle>
        </DialogHeader>

        <form action={clientAction} className="w-full min-h-[200px]">
          <div className="">
            <Label htmlFor="terms">Title</Label>
            <Input type="text" name="title" />
          </div>

          <div className="mb-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Type the project description here."
              name="description"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="my-2">
              <Label htmlFor="terms">Published On</Label>
              <Input type="date" name="date" className="w-full" />
            </div>
            <div className="my-2">
              <Label htmlFor="terms">Type</Label>

              <Select onValueChange={(e) => setType(e)} name="type">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select the publication type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Article">Article</SelectItem>
                  <SelectItem value="Research findings">
                    Research Findings
                  </SelectItem>
                  <SelectItem value="Report">Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="">
            <Label htmlFor="website url">URL</Label>
            <Input
              type="text"
              name="url"
              placeholder="Enter url to where this publication was published in detail..."
            />
          </div>

          <FormButton />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPublicationForm;
