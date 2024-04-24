import { PhoneCall } from "lucide-react";
import FooterCard from "./footer-card";

function Footer() {
  return (
    // <footer className="grid grid-cols-9 grid- py-6 bg-blue-300">
    <>
      {/* <p className="text-center text-2xl ">Visit us at any of our offices</p> */}

      <footer className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 px-5 bg-[#B7CEF9]  mt-5">
        <FooterCard>
          <FooterCard.Title>Kampala Office</FooterCard.Title>
          <FooterCard.Content>
            <p>P.O.BOX 137509</p>
            <p>Mbogo Road 1, Plot 124</p>
            <p>Kiwatule - Najjera Road</p>
            <p> Kampala Uganda</p>
            <p className="flex gap-3 justify-center mt-2">
              <span>
                <PhoneCall />
              </span>
              <span>+256 200 901087</span>
            </p>
          </FooterCard.Content>
        </FooterCard>

        <FooterCard>
          <FooterCard.Title>Blantyre Office</FooterCard.Title>
          <FooterCard.Content>
            <p>32 Black Falcon Close</p>
            <p>Plot Number LK 781/55,</p>
            <p>Namiwawa,</p>
            <p> Blantyre, Malawi</p>
            <p className="flex gap-3 justify-center mt-2">
              <span>
                <PhoneCall />
              </span>
              <span>+265 999 969 533</span>
            </p>
          </FooterCard.Content>
        </FooterCard>

        <FooterCard>
          <FooterCard.Title>Lilongwe Office</FooterCard.Title>
          <FooterCard.Content>
            <p>P.O. Box x70</p>
            <p>Pacific Village Flat No 2,</p>
            <p>Area 9,</p>
            <p> Lilongwe, Malawi</p>

            <p className="flex gap-3 justify-center mt-2">
              <span>
                <PhoneCall />
              </span>
              <span>+265 997 612 787</span>
            </p>
          </FooterCard.Content>
        </FooterCard>

        <FooterCard>
          <FooterCard.Title>Friedberg Office</FooterCard.Title>
          <FooterCard.Content>
            <p>P.O.BOX 61169</p>
            <p>Vorstadt, zum Garten 19,</p>
            <p>611169 Friedberg,</p>
            <p> Hessen, Germany</p>
            <p className="flex gap-3 justify-center mt-2">
              <span>
                <PhoneCall />
              </span>
              <span>+49 176 637 68368</span>
            </p>
          </FooterCard.Content>
        </FooterCard>
      </footer>
      <h3 className="bg-blue-700 text-white text-center py-5 px-4 text-xl">
        &copy; Copyright 2024 | Compelling Works Limited - All Rights Reserved
      </h3>
    </>
  );
}

export default Footer;
