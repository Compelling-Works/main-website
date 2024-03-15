import Image from "next/image";
import ServicesPage from "./our-services";
import Alsuite from "./alsuite";

function AboutUs() {
  return (
    <>
      <div className="relative bg-[url('/images/landing-image.jpg')] h-[50dvh] md:h-[calc(100dvh-10dvh)] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75"></div>

        <div className="absolute inset-0 translate-y-[50%] text-center text-white container">
          <h1 className="md:text-6xl text-2xl font-semibold">Who We Are</h1>
          <p className="md:text-3xl md:mt-4 mt-2 text-md font-light">
            We Are A Development Consultancy Firm, Promoting Health, Wellbeing,
            And Development Through Practical Digital Solutions
          </p>
          <p className="md:text-xl md:mt-2 mt-1 text-sm font-extralight">
            We believe in <span className="font-bold mx-2">value addition</span>
            through the execution of works that are compelling
          </p>
        </div>
      </div>

      <section className="my-5 container text-center md:w-[1200px] grid md:grid-cols-2 gap-3 content-center">
        <Image
          className="block flex-grow rounded-xl"
          src="/images/vision.jpg"
          alt="Asset image"
          width={300}
          height={300}
        />
        <div className="mt-5">
          <h2 className="uppercase md:text-3xl text-2xl text-gray-900">
            Our Vision
          </h2>
          <p className=" md:text-xl text-sm text-gray-600">
            At Compelling Works, we aim to be the preferred digital health
            solutions provider in sub-Saharan Africa by 2025. Individuals in our
            team spend most of their time at work challenging what they know to
            achieve a more innovative and effective use of technology to
            maximize solutions that leverage on recent advancements in
            connectivity and data science for competitive advantage in the
            health, research and development sector.
          </p>
        </div>
      </section>

      <ServicesPage />

      <section className="my-5 container text-center md:w-[1200px] grid md:grid-cols-2 gap-5 content-center">
        <div className="md:mt-5">
          <h2 className="uppercase md:text-3xl text-2xl text-gray-900">
            Our Team
          </h2>
          <p className=" md:text-xl text-sm text-gray-600">
            We are an open-minded, experienced and diverse team of public health
            professionals, software engineers, data scientists, digital
            marketing experts and business analysts who work closely to provide
            great quality and industry standards to achieve unique digital
            solutions for businesses. We love to solve complex problems and are
            always excited to turn ideas from to reality.
          </p>
        </div>
        <Image
          className="block flex-grow rounded-xl"
          src="/images/open-minded.png"
          alt="Asset image"
          width={400}
          height={400}
        />
      </section>

      <section className="py-5 bg-gray-50">
        <div className="my-5 container text-center md:w-[1200px] grid md:grid-cols-2 gap-5 content-center">
          <Image
            className="block flex-grow rounded-xl"
            src="/images/discussing.jpg"
            alt="Asset image"
            width={400}
            height={400}
          />
          <div className="mt-5">
            <h2 className="uppercase md:text-3xl text-2xl text-gray-900">
              Our Approach
            </h2>
            <p className=" md:text-xl text-sm text-gray-600">
              We take a holistic and integrated approach to the deployment of
              digital health solutions. Our service offerings to you in the
              digital health space can be presented in the three broad
              categories of strengthening governance, deploying practical
              digital health solutions, and building capacity of the health
              workforce.
            </p>
          </div>
        </div>
      </section>

      <Alsuite />

      <section className="bg-gray-50 py-10 ">
        <div className="container md:w-[1200px] grid md:grid-cols-2 gap-3 content-center">
          <div className="">
            <h3 className="uppercase md:text-3xl text-2xl font-semibold text-center">
              Legal
            </h3>
            <p className=" md:text-xl text-sm text-gray-600">
              Compelling Works Limited is a private limited company registered
              in Uganda under Registration Certificate No. 80010002950352,
              previously trading as SionaPros Ltd under Certificate of
              Incorporation No. 83057 since September 2006.
            </p>
            <p className="md:text-xl text-sm text-gray-600">
              Compelling Works Ltd was officially registered in Malawi in
              January 2018 under Companies Registration TMBRS 1010676.
            </p>
          </div>

          <Image
            className="block flex-grow rounded-xl"
            src="/images/landing-image.jpg"
            alt="Asset image"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}

export default AboutUs;
