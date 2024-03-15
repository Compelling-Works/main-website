import { BarChart3, Lightbulb } from "lucide-react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhatWeDo = () => {
  return (
    <section className="pt-10 pb-5 ">
      <p className="my-3 md:mt-3 text-2xl md:text-4xl text-center">
        What we do
      </p>
      <div className="what-we-do container text-center md:w-[1200px] md:mx-auto pr-12">
        <div className="col">
          <Link href="/community-health-services">
            <Card className="card w-[300px]">
              <CardHeader className="">
                <CardTitle className="text-center title">
                  Community Health Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  At Compelling Works, we study problems, collect data and
                  gather resources to forge solutions to bottlenecks that affect
                  the health and well-being of the population in a given
                  society.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="col">
          <div className="flex flex-col gap-5">
            <p className=" my-3 md:my-10 text-2xl md:text-4xl"></p>
            <Link href="/research-and-learning">
              <Card className="card w-[300px]">
                <CardHeader className="">
                  <CardTitle className="text-center title">
                    Research and Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Through the Research and Development Unit of Compelling
                    Works, we support your organization to collect, consolidate,
                    and analyse big data to make meaning out of it through
                    simple, yet powerful visualizations.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
        <div className="col">
          <Link href="/digital-health-advisory">
            <Card className="card w-[330px]">
              <CardHeader className="">
                <CardTitle className="text-center title">
                  Digital Health Advisory Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  We take a holistic and integrated approach to the deployment
                  of digital health solutions. Our service offerings can be
                  presented in the three broad categories of strengthening
                  governance, deploying practical digital health solutions, and
                  building capacity of the health workforce.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
