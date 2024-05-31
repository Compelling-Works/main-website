import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { toast, useToast } from "@/components/ui/use-toast";
import DeleteButton from "@/components/shared/delete-button";
import { partners } from "@/database/schema";
import { deletePartnerAction } from "@/actions/delete-actions";
import db from "@/database";

export default async function PartnersTable() {
  const myPartners = await db.select().from(partners);
  // const { toast } = useToast();

  async function deleteAction(formData: FormData) {
    "use server";

    const result = await deletePartnerAction(formData);

    if (result.status === "error") {
      toast({
        title: "Donor deletion error",
        description: `${result.message}`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Donor deletion success",
      description: `${result.message}`,
      variant: "default",
    });
  }
  return (
    <>
      {myPartners.length > 0 ? (
        <>
          <h2 className="text-center text-gray-500 font-semibold mt-4 mb-2">
            Our esteemed partners
          </h2>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead className="w-[200px]">Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myPartners.map((partner, index) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <Image
                      src={partner.logo!}
                      height={50}
                      width={50}
                      alt={`${partner.name}'s logo`}
                    />
                  </TableCell>
                  <TableCell>{partner.name}</TableCell>
                  <TableCell className="flex justify-center ">
                    <form action={deleteAction}>
                      <input type="hidden" name="deleteId" value={partner.id} />
                      <DeleteButton />
                    </form>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            You currently have no partners
          </h1>
        </div>
      )}
    </>
  );
}
