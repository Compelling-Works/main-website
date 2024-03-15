import ContactForm from "../contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  CheckCircle,
  CircleDot,
  Database,
  FileSearch,
  HeartHandshake,
  ScrollText,
} from "lucide-react";

function ConsultantContactUs() {
  return (
    <>
      <div className="relative bg-[url('/images/consultant.jpg')] h-[40dvh] md:h-[50dvh] bg-cover bg-center w-full -mt-[80px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Consultants</h1>
          <p className="text-lg md:text-xl">
            Want to join our team as an expert?
          </p>
        </div>
      </div>

      <div className="py-10 text-center container">
        <p className="md:w-[800px] md:mx-auto md:text-2xl">
          Are you a digital health professional looking to offer services in the
          African region? Compelling Works gives you the opportunity to offer
          your invaluable professional services to clients at different levels
          of expertise and engagement
        </p>
      </div>

      <div className="py-10 text-center bg-zinc-50 container">
        <div className="grid md:grid-cols-4 gap-3 md:w-[1100px] mx-auto">
          <Card>
            <CardHeader className="">
              <CardTitle className="content-center mx-auto">
                <HeartHandshake className="h-10 w-10" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                Different modes of engagement with our clients, ranging from the
                provision of freelance consultancy services, engagement in full
                project implementation and on-going support and backstopping
                services
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="">
              <CardTitle className="content-center mx-auto">
                <BarChart className="size-10" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                Engage at your level and progress through our career path from
                Junior Associate to Partner
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="">
              <CardTitle className="content-center mx-auto">
                <FileSearch className="size-10" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                A results-based consultancy model that allows for flexible
                working arrangements including home and mobile office settings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="">
              <CardTitle className="content-center mx-auto">
                <ScrollText className="h-10 w-10" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                A robust CV management system that will give you the opportunity
                to present your skills and competence in a comprehensive manner,
                with the possibility to export your CV to different formats per
                mouse click.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="md:w-[1100px] md:mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 px-5 gap-5 items-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold my-3">Be a Part of Us</h3>
            <p className="text-md mb-3">
              You are only three steps away from being part of the Compelling
              Works team of innovative and talented digital health professionals
              focusing on continuously adding value to our esteemed clientele.
            </p>

            <p className="flex gap-2 items-center mb-2">
              <Database />
              <span>Request to join our database of consultants.</span>
            </p>
            <p className="flex gap-2 items-center mb-2">
              <CheckCircle />
              <span>
                Receive an invitation from Compelling Works to join our
                database.
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <CircleDot />
              <span>
                Accept the invitation and create your comprehensive CV.
              </span>
            </p>
          </div>
          <ContactForm
            type="consultant"
            heading="Send us an email today to know more about how to become one of our consultants"
          />
        </div>
      </section>
    </>
  );
}

export default ConsultantContactUs;
