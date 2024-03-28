"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function ProjectDescription({
  description,
  name,
}: {
  description: string;
  name: string;
}) {
  const [modelOpen, setModalOpen] = useState(false);
  return (
    <Dialog
      open={modelOpen}
      onOpenChange={(modalOpen) => {
        setModalOpen(modalOpen);
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" className="mt-2 mx-auto">
          Read more
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-[400px] w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-medium">
            <span className="capitalize">{name} description</span>
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
