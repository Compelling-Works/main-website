import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

function ServicesPage() {
  return (
    <section className="my-9 bg-gray-50 py-10 text-center">
      <h3 className=" uppercase md:text-3xl text-2xl my-3 text-gray-900">
        Our Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container md:w-[1100px] mx-auto">
        <Card className=" md:w-[500px]">
          <CardHeader className="md:text-2xl text-xl">
            <CardTitle className="text-gray-700">
              Digital health Advisory Services
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p className="md:text-lg text-sm">
              We support Ministries of Health and other institutions to position
              their governance systems and structures to cope with digital
              transformation, identify and deploy the most suitable digital
              health solutions and train workforces for digital transformation
              in the health sector.
            </p>
          </CardContent>
        </Card>
        <Card className=" md:w-[500px]">
          <CardHeader className="md:text-2xl text-xl">
            <CardTitle className="text-gray-700">
              MERL for Digital Health
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p className="md:text-lg text-sm">
              We support organizations with monitoring, evaluation, research,
              and knowledge dissemination to promote learning in the digital
              health space. This way we bridge the knowledge gap, use unique
              approaches to knowledge generation and support the collection,
              consolidation, and analysis of big data in the health sector to
              make powerful visualizations.
            </p>
          </CardContent>
        </Card>
        <Card className=" md:w-[500px]">
          <CardHeader className="md:text-2xl text-xl">
            <CardTitle className="text-gray-700">
              Software Development
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p className="md:text-lg text-sm">
              We support organizations with the conceptualization, design, and
              deployment of robust software solutions. We develop or customize
              clouds-based as well as on-premise solutions to meet the needs of
              our clients.
            </p>

            {/* <Button asChild className="mt-2">
              <Link href="/about-us/software-development">Learn More</Link>
            </Button> */}
          </CardContent>
        </Card>
        <Card className=" md:w-[500px]">
          <CardHeader className="md:text-2xl text-xl">
            <CardTitle className="text-gray-700">
              Digital Infrastructure Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p className="md:text-lg text-sm">
              We support your organization to conceptualize, design, and deploy
              robust, stable, and scalable digital infrastructure. Key digital
              infrastructure components include computing, storage, network,
              applications, Software as a Service (SaaS) platform that build the
              foundation of digital operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ServicesPage;
