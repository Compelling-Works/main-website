import Interns from "./interns";
import CreativeTeam from "./creative-team";
import Leaders from "./leaders";
import db from "@/database";
import { teamMembers } from "@/database/schema";

const dynamic = "force-dynamic";

export default async function OurTeam() {
  const members = await db.select().from(teamMembers);

  const creativeTeam = members?.filter((t) => t.category === "Creative Team");
  const interns = members?.filter((t) => t.category === "Intern");
  const leaders = members?.filter((t) => t.category === "Our Leadership");

  return (
    <>
      <div className="relative bg-[url('/images/team.jpg')] h-[40dvh] md:h-[50dvh] bg-cover bg-center w-full">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2 font-medium">
            Meet our team
          </h1>
        </div>
      </div>

      {members.length > 0 ? (
        <section className="space-y-5">
          <Leaders leaders={leaders} />

          <CreativeTeam creativeTeam={creativeTeam} />

          <Interns interns={interns} />
        </section>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            No team members at the moment
          </h1>
        </div>
      )}
    </>
  );
}
