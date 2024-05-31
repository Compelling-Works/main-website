import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartnersTable from "./partners-table";
import DonorsTable from "./donors-table";
import AddPartnerForm from "./add-partner-form";
import AddDonorForm from "./add-donor-form";

export default function PartnersAndDonors() {
  return (
    <div className="mt-5 container">
      <h1 className="text-4xl text-center text-gray-600 font-semibold my-3">
        Our Partners and Donors
      </h1>

      <Tabs defaultValue="partners" className="mt-3 w-[1100px]">
        <TabsList className="flex justify-between items-center w-full ">
          <TabsTrigger value="partners" className="flex-1">
            Partners
          </TabsTrigger>
          <TabsTrigger value="donors" className="flex-1">
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
