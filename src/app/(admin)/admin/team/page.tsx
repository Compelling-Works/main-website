import TeamMemberForm from "./add-member-form";
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

import Image from "next/image";
import { getTeamMembers } from "@/data-access/team-members";
import { deleteTeamMemberAction } from "@/actions/delete-actions";
import { toast } from "@/components/ui/use-toast";
import DeleteButton from "@/components/shared/delete-button";
import { teamMembers } from "@/database/schema";

const TeamPage = async ({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { modalOpen: string; member: string };
}) => {
  // const team = await getTeamMembers();
  const team = await db.select().from(teamMembers);

  async function clientAction(formData: FormData) {
    "use server";

    const result = await deleteTeamMemberAction(formData);

    if (result.status === "error") {
      toast({
        title: "Team member deletion error",
        description: `${result.message}`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Team member deletion success",
      description: `${result.message}`,
      variant: "default",
    });
  }

  return (
    <div className="mb-4 px-4 mt-5 w-[1200px] container">
      <TeamMemberForm />

      {team?.length > 0 ? (
        <Table className="px-3">
          <TableCaption>A list of compelling works team members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Bio</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {team?.map((member: any) => (
              <TableRow key={member.name}>
                <TableCell className="">
                  <Image
                    src={member.url}
                    height={50}
                    width={50}
                    alt={member.name}
                    className="h-auto w-auto"
                  />
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell className="truncate">
                  {member.bio.profile.substring(0, 30)}
                </TableCell>
                <TableCell className="flex justify-center ">
                  <form action={clientAction}>
                    <input type="hidden" name="deleteId" value={member.id} />
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
            You currently have no team members
          </h1>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
