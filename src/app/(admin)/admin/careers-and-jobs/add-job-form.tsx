"use client";
import { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { addJobOpenningAction } from "@/actions/create-actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobFormSchema, JobFormSchemaType } from "@/zod/zod-schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const JobOpeningForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<JobFormSchemaType>({
    resolver: zodResolver(JobFormSchema),
    defaultValues: {
      title: "",
      description: "",
      endDate: "",
      pdf: undefined,
    },
  });

  const fileRef = form.register("pdf");

  async function onSubmit(data: JobFormSchemaType) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("close-date", data.endDate);
    formData.append("pdf", data.pdf[0]);

    try {
      const result = await addJobOpenningAction(formData);

      setModalOpen(false);
      toast({
        title: "Job creation",
        description: result?.message,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Job creation error",
        description:
          "Sorry, unable to create job opening. Please try again later",
        variant: "destructive",
      });
      return;
    }
  }

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

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full min-h-[200px]"
            >
              <div className="">
                <Label htmlFor="title">Title</Label>
                <Input
                  {...form.register("title")}
                  type="text"
                  className={cn("w-full", {
                    "ring-1 ring-red-600": form.formState.errors.title,
                  })}
                />
                {form.formState.errors.title && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.title.message}
                  </span>
                )}
              </div>

              <div className="">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  {...form.register("description")}
                  className={cn("w-full", {
                    "ring-1 ring-red-600": form.formState.errors.description,
                  })}
                />
                {form.formState.errors.description && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.description.message}
                  </span>
                )}
              </div>

              <div className="">
                <Label htmlFor="close date">Application close date</Label>
                <Input
                  {...form.register("endDate")}
                  type="date"
                  className={cn("w-full", {
                    "ring-1 ring-red-600": form.formState.errors.endDate,
                  })}
                />
                {form.formState.errors.endDate && (
                  <span className="text-red-600 text-xs">
                    {form.formState.errors.endDate.message}
                  </span>
                )}
              </div>

              <div>
                <Label htmlFor="job advert pdf">Job advert pdf</Label>

                <FormField
                  control={form.control}
                  name="pdf"
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
                <Label htmlFor="terms">PDF</Label>
                <Input type="file" name="pdf" />
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
                    <span className="mr-3">Creating job opening...</span>
                  </>
                ) : (
                  "Create Job Opening"
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobOpeningForm;
