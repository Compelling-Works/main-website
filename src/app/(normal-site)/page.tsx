import PartnersAndDonors from "./partners-and-donors";
import WhatPeopleSay from "./what-people-say";
import { Separator } from "@/components/ui/separator";
import Map from "./map";
import OurCoreValues from "./core-values";

export default function HomePage() {
  return (
    <>
      <div className="relative bg-[url('/images/landing-image.jpg')] h-[40dvh] md:h-[calc(100dvh-10dvh)] w-full bg-cover bg-center ">
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75"></div>

        <div className="absolute inset-0 translate-y-[50%] text-center text-white container">
          <h1 className="md:text-6xl text-2xl font-semibold">
            Compelling Works Limited
          </h1>
          <p className="md:text-3xl md:mt-4 mt-2 text-sm font-extralight">
            Promoting Health, Wellbeing, And Development Through Practical
            Digital Solutions
          </p>
        </div>
      </div>

      <section className="">
        <div className="flex justify-center items-center flex-col bg-gray-50 py-10">
          <h2 className="text-center uppercase md:text-3xl text-4xl font-normal">
            Our Vision
          </h2>
          <p className="text-center md:text-xl text-md font-semibold my-3 text-gray-700">
            We envision organizations in which reliable information is
            customarily used for decision support.
          </p>
        </div>
      </section>

      <Separator className="container" />

      <OurCoreValues />

      {/* <WhatWeDo /> */}

      <Map />

      <div className="py-5">
        <div className="text-center md:my-7 container">
          <p className="md:text-2xl px-5 py-4">
            Our commitment to excellence is as unwavering as our ideas and
            deliverables. We take pride in crafting solutions that not only meet
            but exceed expectations, ensuring a seamless blend of innovation and
            professionalism. Explore the compelling difference with us, where
            quality meets creativity!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 container">
            <p className="flex flex-col ">
              <span className="text-xl font-semibold">
                Project Success Rate
              </span>
              <span className="text-lg">98%</span>
            </p>
            <p className="flex flex-col ">
              <span className="text-xl font-semibold">Staff</span>
              <span className="text-lg">18+</span>
            </p>
            <p className="flex flex-col ">
              <span className="text-xl font-semibold">Completed Projects</span>
              <span className="text-lg">7+</span>
            </p>
            <p className="flex flex-col ">
              <span className="text-xl font-semibold">Offices</span>
              <span className="text-lg">4</span>
            </p>
          </div>
        </div>
      </div>

      {/* <WhatPeopleSay /> */}

      {/* <Alsuite /> */}
      <div className="grid space-y-4  border-t py-3">
        <p className="text-center text-2xl md:text-3xl pt-3">
          Our Partners and Donors
        </p>

        <PartnersAndDonors />
      </div>
    </>
  );
}
