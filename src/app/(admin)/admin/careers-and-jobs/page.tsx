import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/database";

import { Job, jobs } from "@/database/schema";
import JobOpeningForm from "./add-job-form";

export default async function CareersAndJobsPage() {
  const myJobs = await db.select().from(jobs);

  return (
    <div className="mb-4 px-4 w-[1300px] container mt-9">
      <JobOpeningForm />

      {myJobs?.length > 0 ? (
        <Table className="px-3">
          <TableCaption>A list of compelling works jobs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead className="">Close date</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myJobs.map((job: Job, index: number) => (
              <TableRow key={job.id}>
                <TableCell className="">{index + 1}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.endDate}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell className="truncate">{job.description}</TableCell>
                <TableCell className="flex justify-center ">
                  {/* <form action={clientAction}>
                    <input type="hidden" name="deleteId" value={job.id} /> */}
                  <Button variant={"destructive"} size={"sm"} type="submit">
                    Delete
                  </Button>
                  {/* </form> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            You currently have no job openings
          </h1>
        </div>
      )}
    </div>
  );
}
