import { TeamMember } from "@/database/schema";
import Image from "next/image";
import Link from "next/link";

type Interns = {
  interns: TeamMember[];
};

export default function Interns({ interns }: Interns) {
  return (
    <div className="container">
      {interns.length > 0 ? (
        <>
          <h3 className="text-center text-2xl md:text-3xl font-medium text-opacity-85">
            Our Interns
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 m-10 ">
            {interns?.map((member: TeamMember) => (
              <Link href={`/our-team/${member.id}`} key={member.id}>
                <div className="flex flex-col justify-center items-center py-3">
                  <Image
                    src={member.url}
                    alt={`${member.name}'s image`}
                    width={200}
                    height={200}
                    className="rounded-[100%] w-[200px] h-[200px] object-cover shadow-2xl"
                  />
                  <div className="text-center">
                    <p className="text-xl text-center name mt-4 hover:text-blue-700 font-medium">
                      {member.name}
                    </p>
                    <p className="text-lg hover:text-red-600">{member.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            Our internship team is not yet updated
          </h1>
        </div>
      )}
    </div>
  );
}
