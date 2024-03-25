import Image from "next/image";
import { Project, projects } from "@/database/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Filters from "./filter";
import { db } from "@/database";

export default async function ProjectsPage() {
  const allProjects = await db.select().from(projects);
  const mostRecent = allProjects?.shift();

  return (
    <>
      <div className="relative bg-[url('/images/projects.jpg')] h-[40dvh] md:h-[50dvh] bg-cover w-full">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Projects</h1>
          <p className="text-lg md:text-xl">Both closed and open</p>
        </div>
      </div>

      {mostRecent && (
        <div className="w-[1100px] container grid grid-cols-2 my-10 text-xl">
          <div className="grid gap-3 w-[500px]">
            <Image
              src={mostRecent.url}
              alt={mostRecent.name}
              width={500}
              height={400}
            />

            <h3 className="">
              <span>Project name: </span>
              <span className="text-blue-700">{mostRecent.name}</span>
            </h3>

            <p className="">
              <span>Countries: </span>
              <span className="text-blue-700">{mostRecent.country}</span>
            </p>
            <p className="">
              <span>Commissioning party: </span>
              <span className="text-blue-700">
                {mostRecent.commissioningParty}
              </span>
            </p>
          </div>

          <div className="w-[600px]">
            <p className="">
              <span>Implementors: </span>
              <span className="text-blue-700">{mostRecent.implementors}</span>
            </p>
            <p>
              <span>Running from: </span>
              <span className="text-blue-700 mr-3">{mostRecent.startDate}</span>
            </p>

            <p>
              <span>To: </span>
              <span className="text-blue-700">{mostRecent.endDate}</span>
            </p>

            <div className="grid gap-1 mt-3">
              <p>Description</p>

              <p className="text-wrap">{mostRecent.description}</p>
            </div>
          </div>
        </div>
      )}
      <Separator className="my-10 container" />

      <div className="my-10">
        {allProjects.length > 0 ? (
          <>
            {/* <Filters /> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 container">
              {allProjects?.map((project: Project) => (
                <Card
                  key={project.id}
                  className="rounded-md hover:scale-[102%] duration-100 max-w-[450px] max-h-[800px]"
                >
                  <CardContent className="p-0">
                    <div className="content">
                      <Image
                        src={project.url ?? "/images/landing-image.jpg"}
                        width={450}
                        height={400}
                        alt="Image"
                        className="rounded-lg p-2"
                      />
                      <div className="overlay text-left ">
                        <h2 className=" text-white md:text-3xl">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="">
                        <span>Country: </span>
                        <span className="text-blue-700 mr-2">
                          {project.country}
                        </span>
                      </p>
                      <p className="">
                        <span>From: </span>
                        <span className="text-blue-700 mr-2">
                          {project.startDate}
                        </span>
                      </p>
                      <p>
                        <span>To: </span>
                        <span className="text-blue-700 mr-2">
                          {project.endDate}
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

                      {/* <div className="flex justify-center items-center">
                        <Button size="sm" className="mt-2 mx-auto">
                          Read more
                        </Button>
                      </div> */}
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
