import { TeamMember } from "@/database/schema";
import Image from "next/image";
import Link from "next/link";


type CreativeTeam = {
  creativeTeam: TeamMember[];
};

export default function CreativeTeam({ creativeTeam }: CreativeTeam) {
  return (
    <div className="bg-gray-50">
      <div className=" container p-10">
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
                  width={200}
                  height={200}
                  // className="size-[150px]"
                />

                <p className="text-lg name mt-4">{member.name}</p>
                <p className="text-md title">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
