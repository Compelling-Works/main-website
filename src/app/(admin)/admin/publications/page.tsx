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
import AddPublicationForm from "./add-publication-form";
import { getPublications } from "@/data-access/publications";
import { publications } from "@/database/schema";
import db from "@/database";

async function Publications() {
  const mypublications = await db.select().from(publications);
  return (
    <div className="mb-4 px-4 mt-5 w-[1200px] container">
      <AddPublicationForm />

      {mypublications && mypublications.length > 0 ? (
        <>
          <h1 className="my-2 text-center text-2xl text-gray-600">
            Our publications
          </h1>

          <Table className="px-3">
            <TableCaption>
              A list of compelling works publications.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead className="w-[200px]">Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="">Type</TableHead>
                <TableHead className="">Published On</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {mypublications.map((publication: any, index) => (
                <TableRow key={publication.id}>
                  <TableCell className="">{index + 1}</TableCell>
                  <TableCell className="">{publication.title}</TableCell>
                  <TableCell>{publication.description}</TableCell>
                  <TableCell>{publication.type}</TableCell>
                  <TableCell>{publication.date}</TableCell>
                  <TableCell className="">
                    <Button variant={"destructive"} size={"sm"}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="text-center mt-3">
          <p className="text-3xl text-gray-500">
            There are no publications at the moment
          </p>
        </div>
      )}
    </div>
  );
}

export default Publications;
