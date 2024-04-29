import {
  SquareActivity,
  LibraryBig,
  Blend,
  Computer,
  DatabaseZap
} from "lucide-react";

import Link from "next/link";

export default function OurServices() {
  return (
    <section className="py-10 container">
      <div className="flex justify-center items-center flex-col container">
        <h2 className="text-center uppercase md:text-3xl text-2xl font-medium">
          Our Services
        </h2>
        <p className="text-center md:text-xl text-md font-light my-3 text-gray-600">
          These are Our services
        </p>
        <div className="core-values grid grid-cols-1 md:grid-cols-3 gap-2 space-y-5 mt-3">
          <Link href="/about-us" className="text-black-600">
            <div className="value flex items-center gap-7">
              <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
                <SquareActivity />
              </p>
              <div>
                <p className="core md:text-2xl text-lg">Digital health Advisory Services</p>
              </div>
            </div>
          </Link>
          <Link href="/about-us" className="text-black-600">
            <div className="value flex items-center gap-7">
              <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
                <LibraryBig />
              </p>
              <div>
                <p className="core md:text-2xl text-lg">MERL for Digital Health</p>
              </div>
            </div>
          </Link>
          <Link href="/about-us" className="text-black-600">
            <div className="value flex items-center gap-7">
              <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
                <Blend />
              </p>
              <div>
                <p className="core md:text-2xl text-lg">Transparency</p>
              </div>
            </div>
          </Link>
          <Link href="/about-us" className="text-black-600">
            <div className="value flex items-center gap-7">
              <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
                <Computer />
              </p>
              <div>
                <p className="md:text-2xl text-lg">Software Development</p>
              </div>
            </div>
          </Link>
          <Link href="/about-us" className="text-black-600">
            <div className="value flex items-center gap-7">
              <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
                <DatabaseZap />
              </p>
              <div>
                <p className="core md:text-2xl text-lg">Digital Infrastructure Setup</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
