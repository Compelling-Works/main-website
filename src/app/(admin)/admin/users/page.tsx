import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AdminMemberForm from "./add-user-form";
import { User, users } from "@/database/schema";
import { deleteAdminUserAction } from "@/actions/delete-actions";
import { toast, useToast } from "@/components/ui/use-toast";
import DeleteButton from "@/components/shared/delete-button";
import Image from "next/image";
import { User2 } from "lucide-react";
import db from "@/database";

export default async function Users() {
  const myUsers = await db.select().from(users);

  async function clientAction(formData: FormData) {
    "use server";

    try {
      const result = await deleteAdminUserAction(formData);
      toast({
        title: "Admin member deletion success",
        description: `${result.message}`,
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "Sorry, unable to delete admin user. Please try again later!",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mb-4 mt-5 container">
      <AdminMemberForm />
      {myUsers && myUsers.length > 0 ? (
        <div className="w-full">
          <h2 className="text-center text-gray-500 font-semibold mt-4 mb-2 text-xl">
            Registered admins
          </h2>

          <Table className="px-3 w-full">
            <TableCaption>
              A list of compelling works IT support team.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Image</TableHead>
                <TableHead className="">Name</TableHead>
                <TableHead className="">Role</TableHead>

                <TableHead>Created At</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myUsers.map((member: User, index) => (
                <TableRow key={member.id}>
                  <TableCell className="">{index + 1}</TableCell>
                  <TableCell className="">
                    <User2 className="size-[30px]" />
                  </TableCell>

                  <TableCell className="text-left w-[300px]">
                    {member.name}
                  </TableCell>
                  <TableCell className="text-left w-[200px]">
                    {member.role}
                  </TableCell>

                  <TableCell className="text-left w-[250px]">
                    {member.createdAt}
                  </TableCell>
                  <TableCell className="text-left">
                    <form action={clientAction}>
                      <input type="hidden" name="deleteId" value={member.id} />
                      <DeleteButton />
                    </form>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            You currently have registered Compelling works IT support team
            members
          </h1>
        </div>
      )}
    </div>
  );
}
