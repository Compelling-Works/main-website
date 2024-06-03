import Image from "next/image";
import { Project, projects } from "@/database/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Filters from "./filter";
import db from "@/database";
import ProjectDescription from "./projects-description-popup";

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
          <div className="flex flex-col gap-2 w-[500px]">
            <div className="relative overflow-hidden h-[230px]">
              <div className="absolute inset-0 bg-slate-900 bg-opacity-90"></div>
              <Image
                src={mostRecent.url ?? "/images/landing-image.jpg"}
                width={400}
                height={400}
                alt={mostRecent.name}
                className="absolute inset-0 object-cover w-auto h-[400px]"
              />
            </div>

            <h2 className=" text-blue-700 md:text-2xl font-semibold tracking-wider text-center capitalize">
              {mostRecent.name}
            </h2>

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
              <span className="font-medium mr-2">Implementors:</span>

              <span className="text-blue-700">{mostRecent.implementors}</span>
            </p>
            <p>
              <span className="font-medium mr-2">From:</span>

              <span className="text-blue-700">{mostRecent.startDate}</span>
            </p>

            <p>
              <span className="font-medium mr-2">To:</span>

              <span className="text-blue-700">{mostRecent.endDate}</span>
            </p>

            <div className="grid gap-1 mt-3">
              <p className="font-medium">Description</p>
              <p className="text-wrap line-clamp-8">{mostRecent.description}</p>
            </div>

            <ProjectDescription
              key={mostRecent.name}
              description={mostRecent.description}
              name={mostRecent.name}
            />
          </div>
        </div>
      )}
      <Separator className="my-10 container" />

      <div className="my-10">
        {allProjects && allProjects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 container">
              {allProjects.map((project: Project) => (
                <Card
                  key={project.id}
                  className="rounded-lg hover:scale-[102%] duration-100 max-w-[450px] max-h-[800px]"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-[230px]">
                      <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
                      <Image
                        src={project.url ?? "/images/landing-image.jpg"}
                        width={450}
                        height={400}
                        alt="Image"
                        className="absolute inset-0 object-cover w-auto h-[400px]"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className=" text-blue-700 md:text-2xl font-semibold tracking-wider text-center capitalize">
                        {project.name}
                      </h2>
                      <p className="">
                        <span className="font-medium mr-2">Country:</span>

                        <span className="text-blue-700 mr-2">
                          {project.country}
                        </span>
                      </p>
                      <p className="">
                        <span className="font-medium mr-2">From:</span>

                        <span className="text-blue-700 mr-2">
                          {project.startDate}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium mr-2">To:</span>

                        <span className="text-blue-700 mr-2">
                          {project.endDate}
                        </span>
                      </p>

                      <p className="text-md flex gap-2">
                        <span className="font-medium mr-2">
                          Commissioning party:
                        </span>
                        <span className="text-blue-700">
                          {project.commissioningParty}
                        </span>
                      </p>

                      <Separator className="my-2" />

                      <p className="line-clamp-5">{project.description}</p>

                      <div className="flex justify-center items-center">
                        <ProjectDescription
                          key={project.name}
                          description={project.description}
                          name={project.name}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {mostRecent ? (
          ""
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
