import { TeamMember } from "@/database/schema";
import Image from "next/image";
import Link from "next/link";


type CreativeTeam = {
  creativeTeam: TeamMember[];
};

export default function CreativeTeam({ creativeTeam }: CreativeTeam) {
  return (
    <div className="container my-5">
      {creativeTeam.length > 0 ? (
        <div className="">
          <h3 className="text-center text-2xl md:text-3xl font-medium text-opacity-85">
            Our Creative Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 m-10 ">
            {creativeTeam?.map((member: TeamMember) => (
              <Link href={`/our-team/${member.id}`} key={member.id}>
                <div className="flex flex-col justify-center items-center py-3">
                  <Image
                    src={member.url}
                    alt={`${member.name}'s image`}
                    width="250"
                    height="250"
                    // className="block rounded-[50%]"co
                    // style={{
                    //   borderRadius: "50%",
                    //   display: "block",
                    //   margin: "auto",
                    // }}
                  />

                  <div>
                    <p className="text-xl text-center name mt-4 text-blue-700">
                      {member.name}
                    </p>
                    <p className="text-md title">{member.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            Our creative team is not yet updated
          </h1>
        </div>
      )}
    </div>
  );
}
