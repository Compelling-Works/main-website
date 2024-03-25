import { Button } from "@/components/ui/button";
import { db } from "@/database";

import { Job, jobs } from "@/database/schema";
import { Check, Frown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DownloadButton from "./download-button";

async function Careers() {
  const ourJobs = await db.select().from(jobs);

  async function downloadPDF(url: string) {
    const file = await fetch(url);
    console.log(file);
  }

  return (
    <>
      <div className="relative bg-[url('/images/team.jpg')] h-[40dvh] md:h-[calc(50dvh-10dvh)] bg-cover bg-center w-full ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Careers</h1>
          <p className="text-lg md:text-xl">
            Want to start a career at compelling works?
          </p>
        </div>
      </div>

      <div className="px-3">
        <h4 className="font-medium mt-10 md:ml-[150px] md:text-3xl">
          Job Openings
        </h4>
        {/* 
        {ourJobs.length > 0 ? (
          <div className="grid space-y-2 gap-7 md:ml-[150px]">
            {ourJobs?.map((job: Job) => (
              <div className="" key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        ) : ( */}
        <p className="mt-3 md:ml-[150px] md:text-xl text-red-[300] flex ">
          <span className="mr-2">There are currently no job openings</span>
          <span>
            <Frown />
          </span>
        </p>
        {/* )} */}
      </div>

      <div className="px-3">
        <h4 className="font-medium mt-10 md:ml-[150px] md:text-3xl">
          Digital Nomads Alliance (DNA) Platform
        </h4>
        <div className="mt-3 md:ml-[150px]">
          <p className="md:text-2xl">
            At the Digital Nomads Alliance Platform, we:
          </p>
          <p className="flex items-center text md:text-xl">
            <span>
              <Check className="ml-10 mr-2" />
            </span>
            <span>
              Bridge the the gap between clients and Digital Health
              Professionals in Sub-Saharan
            </span>
          </p>
          <p className="flex items-center md:text-xl">
            <span>
              <Check className="ml-10 mr-2" />
            </span>
            <span>
              Deliver Quality Digital Health and MERL projects in a timely
              manner
            </span>
          </p>

          <Button className="mt-4 hover:scale-[1.1]">
            <a href="https://dna.compelling.works" target="_blank">
              Click here to join the DNA{" "}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Careers;
