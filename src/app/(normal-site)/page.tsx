import PartnersAndDonors from "./partners-and-donors";
import WhatPeopleSay from "./what-people-say";
import { Separator } from "@/components/ui/separator";
import Map from "./world-map";
import OurCoreValues from "./core-values";
import OurServices from "./service";

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

      <section className=" bg-gray-50 px-5">
        <div className="flex justify-center items-center flex-col  py-10">
          <h2 className="text-center uppercase md:text-3xl text-4xl font-normal">
            Our Vision
          </h2>
          <p className="text-center md:text-xl text-md font-light my-3 text-gray-700">
            We envision organizations in which reliable information is
            customarily used for decision support.
          </p>
        </div>
      </section>

      <OurServices/>

      <OurCoreValues />

      <div className="container">
        <h2 className="text-center uppercase md:text-3xl text-4xl font-normal">
          Countries Of Our Services
        </h2>
        <Map />
      </div>

      <div className="py-5 md:container">
        <div className="text-center md:my-7">
          <p className="md:text-xl px-3 py-4">
            Our commitment to excellence is as unwavering as our ideas and
            deliverables. We take pride in crafting solutions that not only meet
            but exceed expectations, ensuring a seamless blend of innovation and
            professionalism. Explore the compelling difference with us, where
            quality meets creativity!
          </p>

          <div className="grid grid-cols-1  md:grid-cols-4">
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

      <div className="grid space-y-4  border-t py-3">
        <p className="text-center text-2xl md:text-3xl pt-3">
          Our Partners and Donors
        </p>

        <PartnersAndDonors />
      </div>
    </>
  );
}
