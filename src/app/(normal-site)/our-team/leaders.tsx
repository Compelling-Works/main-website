import { TeamMember } from "@/database/schema";
import Image from "next/image";
import Link from "next/link";

type Leaders = {
  leaders: TeamMember[];
};

export default function Leaders({ leaders }: Leaders) {

  const simon = leaders.find((n) => n.name.toLowerCase().includes("simon"));
  const harold = leaders.find((n) => n.name.toLowerCase().includes("harold"));
  const angelica = leaders.find((n) =>
    n.name.toLowerCase().includes("angelica")
  );
  const jacob = leaders.find((n) => n.name.toLowerCase().includes("mziya"));


  return (
    <div>
      {leaders.length > 0 ? (
        <div className="my-4">
          <h3 className="text-center text-2xl md:text-3xl font-medium text-opacity-85">
            Our Leadership
          </h3>
          {simon && (
            <Link href={`/our-team/${simon.id}`}>
              <div className="my-5 container md:w-[1200px] grid md:grid-cols-2 gap-3 ">
                <Image
                  src={simon.url!}
                  alt={`${simon.name}'s image`}
                  width={450}
                  height={450}
                  className="rounded-[100%] w-[450px] h-[450px]"
                />
                <div className="mt-5">
                  <h2 className="uppercase md:text-3xl text-xl font-medium">
                    {simon.name}
                  </h2>
                  <h2 className="uppercase text-md text-blue-700">
                    {simon.role}
                  </h2>
                  <p className=" md:text-xl text-sm text-gray-800 mt-2">
                    {simon.message?.split("2")[0]}
                  </p>
                  <p className=" md:text-xl text-sm text-gray-800 mt-2">
                    {simon.message?.split("2")[1]}
                  </p>
                </div>
              </div>
            </Link>
          )}

          <div className="bg-gray-50 p-10">
            {harold && (
              <Link
                href={`/our-team/${harold.id}`}
                className="my-5 block container"
              >
                <div className="my-5 container md:w-[1200px] grid md:grid-cols-2 gap-3 ">
                  <div className="mt-5">
                    <h2 className="uppercase md:text-3xl text-xl font-medium">
                      {harold.name}
                    </h2>
                    <h2 className="uppercase text-md text-blue-700">
                      {harold.role}
                    </h2>
                    <p className=" md:text-xl text-sm text-gray-800 mt-2">
                      {harold.message?.split("2")[0]}
                    </p>
                    <p className=" md:text-xl text-sm text-gray-800 mt-2">
                      {harold.message?.split("2")[1]}
                    </p>
                  </div>

                  <Image
                    src={harold.url}
                    alt={`${harold.name}'s image`}
                    width={400}
                    height={400}
                    className="rounded-[100%]"
                  />
                </div>
              </Link>
            )}
          </div>
          {angelica && (
            <Link href={`/our-team/${angelica.id}`} className="my-5">
              <div className="my-5 container md:w-[1200px] grid md:grid-cols-2 gap-3 ">
                <Image
                  src={angelica.url}
                  alt={`${angelica.name}'s image`}
                  width={450}
                  height={450}
                  className="rounded-[100%]"
                />

                <div className="mt-5">
                  <h2 className="uppercase md:text-3xl text-xl font-medium">
                    {angelica.name}
                  </h2>
                  <h2 className="uppercase text-md text-blue-700">
                    {angelica.role}
                  </h2>
                  <p className=" md:text-xl text-sm text-gray-800 mt-2">
                    {angelica.message?.split("2")[0]}
                  </p>
                  <p className=" md:text-xl text-sm text-gray-800 mt-2">
                    {angelica.message?.split("2")[1]}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {jacob && (
            <Link href={`/our-team/${jacob.id}`} className="my-5">
              <div className="my-5 container md:w-[1200px] grid md:grid-cols-2 gap-3 ">
                <Image
                  src={jacob.url}
                  alt={`${jacob.name}'s image`}
                  width={450}
                  height={450}
                  className="rounded-[100%]"
                />

                <div className="mt-5">
                  <h2 className="uppercase md:text-3xl text-xl font-medium">
                    {jacob.name}
                  </h2>
                  <h2 className="uppercase text-md text-blue-700">
                    {jacob.role}
                  </h2>
                  <p className=" md:text-xl text-sm text-gray-800 mt-2">
                    {jacob.message?.split("2")[0]}
                  </p>
                  <p className=" md:text-xl text-sm text-gray-800 mt-2">
                    {jacob.message?.split("2")[1]}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      ) : (
        <div className="mt-5 text-center">
          <h1 className="text-gray-700 text-2xl">
            Our leadership team is not yet updated
          </h1>
        </div>
      )}
    </div>
  );
}
