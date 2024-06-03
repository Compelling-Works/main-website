import { Office, offices } from "@/database/schema";
import AddOfficeForm from "./add-office-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/database";

export default async function OurOfficesPage() {
  const _offices = await db.select().from(offices);

  return (
    <div className="mt-5 container">
      <h1 className="my-2 text-3xl font-semibold text-center">Our offices</h1>
      <AddOfficeForm />

      {_offices && _offices.length > 0 ? (
        <Table className="px-3 w-full">
          <TableCaption>A list of compelling works offices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>City</TableHead>
              <TableHead className="">Country</TableHead>
              <TableHead className="">Area</TableHead>

              <TableHead>Telephone</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_offices.map((office: Office, index: number) => (
              <TableRow key={office.id}>
                <TableCell className="">{index + 1}</TableCell>
                <TableCell className="">{office.city}</TableCell>

                <TableCell className="text-left">{office.country}</TableCell>
                <TableCell className="text-left">{office.area}</TableCell>

                <TableCell className="text-left">{office.telephone}</TableCell>
                <TableCell className="text-left">
                  {/* <form action={clientAction}>
                      <input type="hidden" name="deleteId" value={office.id} />
                      <DeleteButton />
                    </form> */}
                  Delete
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            You currently have no registered Compelling works offices
          </h1>
        </div>
      )}
    </div>
  );
}
