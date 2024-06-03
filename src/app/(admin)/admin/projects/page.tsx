import { Button } from "@/components/ui/button";
import db from "@/database";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProjectForm from "./add-project-form";
import { Project, projects } from "@/database/schema";
import { deleteProjectAction } from "@/actions/delete-actions";
import { toast, useToast } from "@/components/ui/use-toast";
import DeleteButton from "@/components/shared/delete-button";

async function Projects() {
  const myprojects = await db
    .select()
    .from(projects)
    .orderBy(projects.startDate);

  // const { toast } = useToast();

  async function clientAction(formData: FormData) {
    "use server";
    const result = await deleteProjectAction(formData);

    if (result.status === "error") {
      toast({
        title: "Project deletion error",
        description: `${result.message}`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Project deletion success",
      description: `${result.message}`,
      variant: "default",
    });
  }

  return (
    <div className="mb-2 px-4 mt-5 container">
      <AddProjectForm />

      {myprojects && myprojects.length > 0 ? (
        <Table className="px-3">
          <TableCaption>
            A list of projects contributed to by Compelling Works Limited.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Country</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myprojects.map((project: Project, index) => (
              <TableRow key={project.id}>
                <TableCell className="">{index + 1}</TableCell>
                <TableCell className="">{project.name}</TableCell>
                <TableCell>{project.startDate}</TableCell>
                <TableCell>{project.endDate}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{project.country}</TableCell>
                <TableCell className="">
                  <form action={clientAction}>
                    <input type="hidden" name="deleteId" value={project.id} />
                    <DeleteButton />
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            You currently have no projects
          </h1>
        </div>
      )}
    </div>
  );
}
export default Projects;
