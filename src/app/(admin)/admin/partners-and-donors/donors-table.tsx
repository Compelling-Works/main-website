import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/database";
import Image from "next/image";
import { deleteDonorAction } from "@/actions/delete-actions";
import { toast, useToast } from "@/components/ui/use-toast";
import DeleteButton from "@/components/shared/delete-button";
import { donors } from "@/database/schema";

export default async function DonorsTable() {
  const myDonors = await db.select().from(donors);
  // const { toast } = useToast();

  async function deleteAction(formData: FormData) {
    "use server";

    const result = await deleteDonorAction(formData);

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
      {myDonors.length > 0 ? (
        <>
          <h2 className="text-center text-gray-500 font-semibold mt-4 mb-2">
            Our esteemed donors
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
              {myDonors.map((donor, index) => (
                <TableRow key={donor.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <Image
                      src={donor.logo!}
                      height={50}
                      width={50}
                      alt={`${donor.name}'s logo`}
                    />
                  </TableCell>
                  <TableCell>{donor.name}</TableCell>
                  <TableCell className="flex justify-center ">
                    <form action={deleteAction}>
                      <input type="hidden" name="deleteId" value={donor.id} />
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
            You currently have no donors
          </h1>
        </div>
      )}
    </>
  );
}
