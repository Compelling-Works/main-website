import { TeamMember } from "@/database/schema";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

type Interns = {
  interns: TeamMember[];
};

export default function Interns({ interns }: Interns) {
  return (
    <div className="container">
      {interns.length > 0 ? (
        <>
          <h3 className="text-center text-2xl">Our Interns</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 m-10 ">
            {interns?.map((member: TeamMember) => (
              <Link href={`/our-team/${member.id}`} key={member.id}>
                <div className="flex flex-col justify-center items-center py-3">
                  <Suspense
                    fallback={
                      <Skeleton className="h-[200px] w-[200px] rounded-full" />
                    }
                  >
                    <Image
                      src={member.url}
                      alt={`${member.name}'s image`}
                      width={200}
                      height={200}
                      className="rounded-full"
                    />
                  </Suspense>
                  <p className="text-lg name mt-4">{member.name}</p>
                  <p className="text-md title">{member.role}</p>
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
