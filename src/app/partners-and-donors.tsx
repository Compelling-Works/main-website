import Marquee from "react-fast-marquee";
import Image from "next/image";

const PartnersAndDonors = () => {
  return (
    <Marquee className="" autoFill={true} pauseOnHover={true}>
      <a href="https://m4health.pro/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/m4h-logo-web.png"
          className="mx-6 logo"
          alt="m4h logo"
          width={150}
          height={100}
        />
      </a>

      <a
        href="https://www.gatesfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/gates-foundation.png"
          className="mx-6 logo"
          alt="m4h logo"
          width={150}
          height={100}
        />
      </a>
      <a
        href="https://www.giz.de/en/html/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/giz.png"
          className="mx-6 logo"
          alt="Giz logo"
          width={150}
          height={100}
        />
      </a>
    </Marquee>
  );
};

export default PartnersAndDonors;
