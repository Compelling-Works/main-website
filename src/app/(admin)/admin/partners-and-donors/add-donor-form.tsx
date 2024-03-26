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
import { DonorFormSchema, DonorFormSchemaType } from "@/zod/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

const AddDonorForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<DonorFormSchemaType>({
    resolver: zodResolver(DonorFormSchema),
    defaultValues: {
      name: "",
      website_url: "",
      logo: undefined,
    },
  });

  const fileRef = form.register("logo");

  const clientAction = async (formData: FormData) => {
    try {
      const result = await addDonorAction(formData);

      setModalOpen(false);
      toast({
        title: "Donor Creation",
        description: result?.message,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "Unable to add a donor at the moment. Please try again later!",
        variant: "destructive",
      });
    }
  };

  async function onSubmit(data: DonorFormSchemaType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("logo", data.logo[0]);
    formData.append("url", data.website_url);

    try {
      const result = await addDonorAction(formData);

      setModalOpen(false);
      toast({
        title: "Project creation success",
        description: result?.message,
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to add donor. Please try again later ",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Dialog
        open={modalOpen}
        onOpenChange={(modalOpen) => {
          setModalOpen(modalOpen);
          form.reset();
        }}
      >
        <DialogTrigger asChild>
          <Button>Add Donor</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Add a new donor</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            {/* <form action={clientAction} className="w-full"> */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="">
                <Label htmlFor="terms">Name</Label>
                <Input
                  type="text"
                  {...form.register("name")}
                  placeholder="Add donor name here.."
                />
                {form.formState.errors.name && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.name.message}
                  </span>
                )}
              </div>
              <div className="">
                <Label htmlFor="Website URL">Website URL</Label>
                <Input
                  type="text"
                  {...form.register("website_url")}
                  placeholder="Add url to the donor's website here.."
                />
                {form.formState.errors.website_url && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.website_url.message}
                  </span>
                )}
              </div>

              <div>
                <Label>Donor&apos;s logo </Label>

                <FormField
                  control={form.control}
                  name="logo"
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

              {/* <div className="">
                <Label htmlFor="Logo">Logo</Label>
                <Input type="file" name="logo" />
              </div> */}

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
                    <span className="mr-3">Adding donor...</span>
                  </>
                ) : (
                  "Add Donor"
                )}
              </Button>

              {/* <FormButton /> */}
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDonorForm;
