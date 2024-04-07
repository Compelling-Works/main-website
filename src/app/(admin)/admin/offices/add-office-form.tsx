"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

import { OfficeFormSchema, OfficeFormSchemaType } from "@/zod/zod-schemas";
import { Form } from "@/components/ui/form";
import { offices } from "@/database/schema";
import { db } from "@/database";
import { addOfficeAction } from "@/actions/create-actions";

export default function AddOfficeForm() {
  const [modalOpen, setModalOpen] = useState(false);

  const { toast } = useToast();

  const form = useForm<OfficeFormSchemaType>({
    resolver: zodResolver(OfficeFormSchema),
    defaultValues: {
      city: "",
      country: "",
      area: "",
      plotNumber: "",
      postOfficeBox: "",
      telephone: "",
    },
  });

  async function onSubmit(data: OfficeFormSchemaType) {
    //  "use server";
    const formData = new FormData();

    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("area", data.area);
    formData.append("plotNumber", data.plotNumber);
    formData.append("postOfficeBoxNumber", data.postOfficeBox);
    formData.append("telephone", data.telephone);

    try {
      const result = await addOfficeAction(formData);

      toast({
        title: "Office creation",
        description: `${data.city} office created successfully`,
        variant: "default",
      });

      form.reset();
      setModalOpen(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to add office. Please try again later!",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={(modalOpen) => {
        setModalOpen(modalOpen);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Add new admin account
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full min-h-[200px]"
          >
            <div className="">
              <Label htmlFor="name">City</Label>
              <Input
                {...form.register("city")}
                placeholder="Add city where the office is located"
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.city,
                })}
              />
              {form.formState.errors.city && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.city.message}
                </span>
              )}
            </div>
            <div className="my-2">
              <Label htmlFor="username">Country</Label>
              <Input
                {...form.register("country")}
                placeholder="Add country where the office is located"
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.country,
                })}
              />
              {form.formState.errors.country && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.country.message}
                </span>
              )}
            </div>

            <div className="mb-2">
              <Label htmlFor="email">Plot number</Label>
              <Input
                placeholder="Enter plot number where office is located."
                {...form.register("plotNumber")}
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.plotNumber,
                })}
              />
              {form.formState.errors.plotNumber && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.plotNumber.message}
                </span>
              )}
            </div>

            <div className="">
              <Label htmlFor="password">P.O.Box</Label>
              <Input
                {...form.register("postOfficeBox")}
                placeholder="Enter post office box number form office"
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.postOfficeBox,
                })}
              />
              {form.formState.errors.postOfficeBox && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.postOfficeBox.message}
                </span>
              )}
            </div>
            <div className="">
              <Label htmlFor="password">Area</Label>

              <Input
                {...form.register("area")}
                placeholder="Add area where the office is located"
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.area,
                })}
              />
              {form.formState.errors.area && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.area.message}
                </span>
              )}
            </div>

            <div>
              <Label>Telephone number</Label>
              <Input
                {...form.register("telephone")}
                placeholder="Enter office telephone number"
                className={cn("w-full", {
                  "ring-1 ring-red-600": form.formState.errors.telephone,
                })}
              />
              {form.formState.errors.telephone && (
                <span className="text-red-600 text-xs">
                  {form.formState.errors.telephone.message}
                </span>
              )}
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
                  <Loader2 className="size-4 animate-spin mr-2" />
                  <span className="mr-3">Adding office...</span>
                </>
              ) : (
                "Add Office"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
