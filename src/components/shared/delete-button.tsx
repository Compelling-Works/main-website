"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={"destructive"}
      size={"sm"}
      type="submit"
      className="w-[100px]"
    >
      {pending ? (
        <>
          <Loader className="size-5 animate-spin mr-2" />
          <span>Deleting...</span>
        </>
      ) : (
        "Delete"
      )}
    </Button>
  );
}
