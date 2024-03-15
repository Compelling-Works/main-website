import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartnersTable from "./partners-table";
import DonorsTable from "./donors-table";
import AddPartnerForm from "./add-partner-form";
import AddDonorForm from "./add-donor-form";

export default function PartnersAndDonors() {
  return (
    <div className="container">
      <h1 className="text-2xl text-center text-gray-600 font-bold">
        Our Partners and Donors
      </h1>

      <Tabs defaultValue="partners" className="md:w-[800px] md:mx-auto mt-3">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="partners" className="">
            Partners
          </TabsTrigger>
          <TabsTrigger value="donors" className="">
            Donors
          </TabsTrigger>
        </TabsList>
        <TabsContent value="partners" className="">
          <AddPartnerForm />

          <PartnersTable />
        </TabsContent>
        <TabsContent value="donors">
          <AddDonorForm />
          <DonorsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
