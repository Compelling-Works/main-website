"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

type ButtonProps = {
  type?: string;
};

export default function FormButton({ type }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn("mt-4 w-full", { "opacity-50": pending })}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <span className="mr-3">Submitting</span>
          <Loader className="h-5 w-5 animate-spin" />
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
