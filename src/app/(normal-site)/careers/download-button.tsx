"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadFile } from "./download-file";

type ButtonProps = {
  url: string;
  fileName: string;
};

export default function DownloadButton({ url, fileName }: ButtonProps) {
  function downloadPDF() {
    const file = downloadFile(url);
    console.log(file);
    // const aTag = document.createElement("a") as HTMLAnchorElement;
    // aTag.href = url;
    // aTag.setAttribute("download", fileName);
    // aTag.setAttribute("target", "_blank");
    // document.body.appendChild(aTag);
    // aTag.click();
    // aTag.remove();
  }

  return (
    <p
      // variant={"link"}
      onClick={() => downloadPDF()}
      className="flex justify-center items-center gap-2 cursor-pointer"
    >
      <Download className="size-3" />
      <span>Download full job advert</span>
    </p>
  );
}
