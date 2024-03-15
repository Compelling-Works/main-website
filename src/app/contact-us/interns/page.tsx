import Image from "next/image";
import ContactForm from "../contact-form";
import React from "react";
import { CheckCircle, Facebook, Linkedin } from "lucide-react";

function InternsContactUs() {
  return (
    <>
      <div className="relative bg-[url('/images/internship.jpg')] h-[40dvh] md:h-[50dvh] bg-cover bg-center w-full -mt-[80px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Interns</h1>
          <p className="text-lg md:text-xl">
            Do you want to join our team as an intern?
          </p>
        </div>
      </div>

      <section className="text-center py-10 md:w-[750px] md:mx-auto">
        <h3 className="md:text-3xl text-x pb-2">
          Join our <span className="font-semibold l">internship program</span>
        </h3>

        <p className="pb-4">
          Our Internship Programme offers students or recent graduates the
          opportunity to gain experience in the digital health sector in line
          with their academic programme or future work in a field related to our
          mission to promote health, wellbeing, and development through
          practical digital solutions.
        </p>
      </section>

      <section className="bg-gray-50 py-20 ">
        <div className="md:w-[1150px] md:mx-auto text-center mb-4">
          <h4 className="text-center md:text-2xl font-semibold mb-5">
            Eligibility
          </h4>
          <p className="pb-10">
            Compelling Works recruits talented, motivated and passionate
            individuals from around the world who add knowledge, innovative
            thinking and ideas to enhance our capacity in harnessing the power
            of innovation and technology in the digital health sector. The
            internships are offered at our various locations in Uganda and
            Malawi; depending on the needs and capacity of the offices to
            receive and supervise interns and provide them with meaningful
            assignments.
          </p>
          <div className="grid md:grid-cols-2 gap-4  ">
            <div className="space-y-5">
              <p className="mb-2 text-left flex gap-3 items-center">
                <CheckCircle className="w-6 h-6" />
                <span>
                  Be Enrolled In A Graduate School Programme (Second University
                  Degree Or Equivalent, Or Higher)
                </span>
              </p>
              <p className="mb-2 text-left flex gap-3 items-center">
                <CheckCircle className="w-6 h-6" />
                <span>
                  Be Enrolled In The Final Academic Year Of A University Degree
                  (Minimum Bachelor’s Level Or Equivalent)
                </span>
              </p>
              <p className="mb-2 text-left flex gap-3 items-center">
                <CheckCircle className="w-6 h-6" />
                <span>
                  Have Graduated With A University Degree (As Defined In (A) And
                  (B) Above And, If Selected, Must Start The Internship Within
                  One Year Of Graduation.
                </span>
              </p>
            </div>
            <Image
              src="/images/landing-image.jpg"
              width={500}
              height={500}
              alt="intern image"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="md:w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 px-5 gap-5 items-center">
          <div className="text-center">
            <h3 className="text-2xl font-semi-bold my-3">Contact Us</h3>
            <p>Send us a message or visit us at any of our offices</p>
            <div className="flex gap-2 justify-center items-center">
              <Linkedin className="" />
              <Facebook />
            </div>
          </div>
          <ContactForm
            type="intern"
            heading="Want to be an intern at compelling works? send us an email today"
          />
        </div>
      </section>
    </>
  );
}

export default InternsContactUs;
