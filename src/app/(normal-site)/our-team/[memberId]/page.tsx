import { TeamMember, teamMembers } from "@/database/schema";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import db from "@/database";
import { eq, sql } from "drizzle-orm";

type Bio = {
  education: string;
  profile: string;
  experience: string;
};

export default async function TeamMemberPage({
  params,
}: {
  params: { memberId: string };
}) {
  const id = params.memberId!;

  const teamMember = await db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.id, id));

  const member = teamMember.pop()!;

  const bio = member.bio as Bio;
  return (
    <div className="container  mt-[13dvh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:w-[1100px] md:mx-auto mt-4">
        <Image
          src={member.url}
          alt={`The picture of${member.url}`}
          width={2560}
          height={2001}
          className="h-min-[700px] w-auto"
        />

        <div>
          <h1 className="uppercase text-3xl font-semibold ">{member.name}</h1>
          {/* TODO: Add socials details here */}
          <h2 className="text-xl">{member.role}</h2>
          {/* <div>
            <Linkedin />
          </div> */}
          <div className="text-md space-y-2">
            <p>{bio.profile}</p>
            <p>{bio.education}</p>
            <p>{bio.experience}</p>
          </div>
        </div>
      </div>

      <p></p>
    </div>
  );
}
