import {
  Bike,
  CheckCircle2,
  Gem,
  Glasses,
  HeartHandshake,
  BarChart,
} from "lucide-react";

export default function OurCoreValues() {
  return (
    <section className="py-10 container">
      <div className="flex justify-center items-center flex-col container">
        <h2 className="text-center uppercase md:text-3xl text-2xl font-medium">
          Our Core Values
        </h2>
        <p className="text-center md:text-xl text-md font-light my-3 text-gray-600">
          We are founded on the core values of Integrity, Competence,
          Transparency, Respect, Contribution, and Excellence (ICTRCE)
        </p>

        <div className="core-values grid grid-cols-1 md:grid-cols-3 gap-2 space-y-5 mt-3">
          <div className="value flex items-center gap-7">
            <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
              <BarChart className="" />
            </p>
            <div>
              <p className="core md:text-2xl text-lg">Integrity</p>
              <p className="md:text-xl text-sm">
                Striving to do the right thing
              </p>
            </div>
          </div>

          <div className="value flex items-center gap-7">
            <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
              <Bike className="" />
            </p>
            <div>
              <p className="core md:text-2xl text-lg">Competence</p>
              <p className="md:text-xl text-sm">
                Working efficiently and effectively
              </p>
            </div>
          </div>

          <div className="value flex items-center gap-7">
            <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
              <Glasses className="" />
            </p>
            <div>
              <p className="core md:text-2xl text-lg">Transparency</p>
              <p className="md:text-xl text-sm">
                Open and honest in all our dealings
              </p>
            </div>
          </div>

          <div className="value flex items-center gap-7">
            <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
              <HeartHandshake className="" />
            </p>
            <div>
              <p className="core md:text-2xl text-lg">Respect</p>
              <p className="md:text-xl text-sm">Acting with Respect for all</p>
            </div>
          </div>
          <div className="value flex items-center gap-7">
            <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
              <Gem className="" />
            </p>
            <div>
              <p className="core md:text-2xl text-lg">Contribution</p>
              <p className="md:text-xl text-sm">
                Making a positive contribution
              </p>
            </div>
          </div>

          <div className="value flex items-center gap-7">
            <p className="block icon border-2 border-[#0830B2] p-4 rounded-full">
              <CheckCircle2 className="" />
            </p>
            <div>
              <p className="core md:text-2xl text-lg">Excellence</p>
              <p className="md:text-xl text-sm">
                Striving to be the best in all we do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
