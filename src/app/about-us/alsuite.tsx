import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const Alsuite = () => {
  return (
    <section className="text-center container py-10">
      <h1 className=" uppercase my-3 text-2xl">Our Products</h1>

      <div className="grid md:grid-cols-2 gap-3 content-center py-10">
        <div className="flex flex-col items-center justify-center space-y-6 ">
          <h2 className="text-xl mt-5 text-gray-900">We have designed</h2>
          <Image
            src="/images/alsuite_logo.png"
            alt="alsuite logo"
            width={150}
            height={140}
            // className="w-full"
          />

          <p className="text-md mb-3">
            a cloud-based Enterprise Resource Planning (ERP) platform for small-
            to medium-size enterprises (SMEs) used to manage day-to-day business
            activities. AlSuite enables your organization to manage accounts,
            perform project monitoring and evaluation, manage project execution,
            and generate comprehensive operations and financial reports among
            many other features, all in one place.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold pb-3">Key Features</h3>
          <div className="space-y-2 text-left">
            <p className="">
              <span className="text-gray-800 mr-2 font-semibold underline">
                Clients & Accounts:
              </span>
              Manage clients, projects, charts of accounts, budgeting, funds
              receipt. Track budgets real time.
            </p>
            <p className="">
              <span className="text-gray-800 mr-2 font-semibold underline">
                Monitoring & Evaluation:
              </span>
              Manage outcomes, outputs, indicators, risks, interventions,
              milestones, weights. Track progress real time.
            </p>
            <p className="">
              <span className="text-gray-800 mr-2 font-semibold underline">
                Work plan & Execution:
              </span>
              Manage targets, activity plans, requisitions, attachments,
              approvals, comments. Know what you should be doing real time.
            </p>
            <p className="">
              <span className="text-gray-800 mr-2 font-semibold underline">
                Robust Reporting:
              </span>
              Access instant and informative finance, M&E and operations reports
              real time.
            </p>
            <p className="">
              <span className="text-gray-800 mr-2 font-semibold underline">
                System Administration:
              </span>{" "}
              Manage users, role based access rights, system settings and
              subscriptions.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      <h4 className="my-2 text-xl">Companies that use Alsuite sofar</h4>

      <div className="flex justify-center items-center gap-4">
        {/* <Image
          src="/images/fowode.png"
          width={150}
          height={100}
          alt="FOWODE logo"
        /> */}
        <Image
          src="/images/mifumi.png"
          width={150}
          height={100}
          alt="FOWODE logo"
        />
        {/* <Image
          src="/images/mifumi-health-services.png"
          width={150}
          height={100}
          alt="FOWODE logo"
        />
        <Image
          src="/images/obi-works.png"
          width={150}
          height={100}
          alt="FOWODE logo"
        /> */}
      </div>
    </section>
  );
};

export default Alsuite;
