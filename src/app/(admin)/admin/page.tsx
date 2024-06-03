// "use client";

import db from "@/database/index";
import {
  donors,
  jobs,
  offices,
  partners,
  projects,
  publications,
  teamMembers,
  users,
} from "@/database/schema";

type Statistics = {
  name: string;
  data: number;
};

export default async function AdminHomePage() {
  const _projects = (await db.select().from(projects)).length;
  const _users = (await db.select().from(users)).length;
  const _teamMembers = (await db.select().from(teamMembers)).length;
  const _partners = (await db.select().from(partners)).length;
  const _donors = (await db.select().from(donors)).length;
  const _publications = (await db.select().from(publications)).length;
  const _jobs = (await db.select().from(jobs)).length;
  const _offices = (await db.select().from(offices)).length;

  const data: Statistics[] = [
    { name: "Projects", data: _projects },
    { name: "Users", data: _users },
    { name: "Team members", data: _teamMembers },
    { name: "Partners", data: _partners },
    { name: "Donors", data: _donors },
    { name: "Publications", data: _publications },
    { name: "Job Openings", data: _jobs },
    { name: "Offices", data: _offices },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mt-3">
        Website statistics
      </h1>

      <div className="grid grid-cols-4 gap-4 container my-10">
        {data &&
          data.map((data) => {
            return (
              <div
                key={data.name}
                className="flex flex-col items-center justify-center w-[250px] h-[200px] border-2 rounded-lg"
              >
                <p className="text-3xl font-medium text-blue-700">
                  {data.name}
                </p>
                <p className="text-2xl text-red-600">{data.data}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
