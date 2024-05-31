import Marquee from "react-fast-marquee";

import { donors, partners } from "@/database/schema";
import Link from "next/link";
import db from "@/database";
import Image from "next/image";

const PartnersAndDonors = async () => {
  const _partners = await db.select().from(partners);
  const _donors = await db.select().from(donors);

  const partnersAndDonors = [..._partners, ..._donors];

  return (
    <>
      <Marquee className="" autoFill={true} pauseOnHover={true}>
        {partnersAndDonors &&
          partnersAndDonors.length > 0 &&
          partnersAndDonors.map((partnerOrDonor) => {
            return (
              <Link
                href={partnerOrDonor.website!}
                target="_blank"
                key={partnerOrDonor.id}
              >
                <Image
                  src={partnerOrDonor.logo!}
                  className="mx-6 logo"
                  alt={partnerOrDonor.name}
                  width="130"
                  height="30"
                />
              </Link>
            );
          })}
      </Marquee>

      {partnersAndDonors.length === 0 && (
        <div className="mt-1">
          <h2 className="text-center text-xl">
            Partners and donors not yet updated
          </h2>
        </div>
      )}
    </>
  );
};

export default PartnersAndDonors;
