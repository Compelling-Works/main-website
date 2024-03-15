import ContactForm from "../contact-form";

function ClientContactUs() {
  return (
    <>
      <div className="relative bg-[url('/images/team.jpg')] h-[40dvh] md:h-[50dvh] bg-cover bg-center w-full -mt-[80px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
        <div className="absolute inset-0 translate-y-[50%] md:ml-20  text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Clients</h1>
          <p className="text-lg md:text-xl">
            Are you a client and want to reach out to us?
          </p>
        </div>
      </div>

      <div className="py-10 bg-zinc-50 text-center">
        <p className="md:w-[800px] md:mx-auto">
          The digital health landscape is changing rapidly, making it difficult
          for organizations and institutions serving the health sector to always
          have the right expertise in-house to successfully implement digital
          health projects. There is an increasing need for external
          professionals to support the internal workforce to get the work done.
        </p>
      </div>

      <section className="my-5 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-[900px] mx-auto items-center">
          <div className="text-center">
            <h3 className="text-2xl font-semi-bold my-3">Why Join Us?</h3>
            <p>
              Benefit from our pool of digital health professionals to get your
              projects successfully implemented through different modes of
              engagement.
            </p>

            <h3 className="text-2xl font-semi-bold my-3">Contact Us</h3>

            <p>Send us a message or visit any of our offices</p>
          </div>
          <ContactForm type="client" heading="Become our client today" />
        </div>
      </section>
    </>
  );
}

export default ClientContactUs;
