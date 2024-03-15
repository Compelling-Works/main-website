import Image from "next/image";
import { Project, projects } from "@/database/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Filters from "./filter";
import { db } from "@/database";

export default async function ProjectsPage() {
  const allProjects = await db.select().from(projects);
  const mostRecent = allProjects.pop();

  return (
    <>
      <div className="relative bg-[url('/images/projects.jpg')] h-[40dvh] md:h-[50dvh] bg-cover w-full">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Projects</h1>
          <p className="text-lg md:text-xl">Both closed and open</p>
        </div>
      </div>

      <div className="my-10">
        {allProjects.length > 0 ? (
          <>
            <div className="md:w-[1000px] mx-auto">
              <div className="grid md:grid-cols-2 gap-2 container">
                <div>
                  <div className="content">
                    <Image
                      src="/images/landing-image.jpg"
                      width={400}
                      height={700}
                      alt="Image"
                      className="rounded-lg w-full"
                    />
                    <div className="overlay text-left ">
                      <h2 className=" text-white md:text-3xl">
                        {mostRecent?.name}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className="flex gap-4 text-md mt-1">
                      Country:
                      <span className="text-blue-700 mr-2">
                        {mostRecent?.country}
                      </span>
                    </p>
                    <p className="flex gap-4 text-md">
                      Period:
                      <span className="text-blue-700 mr-2">
                        {mostRecent?.startDate} to {mostRecent?.endDate}
                      </span>
                    </p>
                    <p className="text-md flex gap-2">
                      Commissioning party:{" "}
                      <span className="text-blue-700">
                        {mostRecent?.commissioningParty}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="line-clamp-7">{mostRecent?.description}</p>
                  <Button size={"sm"} className="mt-4">
                    Read more
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-10 container" />

            {/* <Filters /> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4 container">
              {allProjects?.map((project: Project) => (
                <Card
                  key={project.id}
                  className="p-0 rounded-md hover:scale-[102%] duration-100"
                >
                  <CardContent className="p-0">
                    <div className="content">
                      <Image
                        src="/images/landing-image.jpg"
                        width={400}
                        height={500}
                        alt="Image"
                        className="rounded-lg"
                      />
                      <div className="overlay text-left ">
                        <h2 className=" text-white md:text-3xl">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="flex gap-4 text-md mt-1">
                        Country:
                        <span className="text-blue-700 mr-2">
                          {project.country}
                        </span>
                      </p>
                      <p className="flex gap-4 text-md">
                        Period:
                        <span className="text-blue-700 mr-2">
                          {project.startDate} to {project.endDate}
                        </span>
                      </p>

                      <p className="text-md flex gap-2">
                        Commissioning party:{" "}
                        <span className="text-blue-700">
                          {project.commissioningParty}
                        </span>
                      </p>

                      <Separator className="my-2" />

                      <p className="line-clamp-4">{project.description}</p>

                      <div className="flex justify-center items-center">
                        <Button size="sm" className="mt-2 mx-auto">
                          Read more
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-5 text-center">
            <h1 className="text-gray-700 text-2xl">
              No projects at the moment
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
