"use client";
import {
  UG,
  MW,
  FR,
  ET,
  GH,
  KG,
  MG,
  GM,
  DE,
  ID,
} from "country-flag-icons/react/3x2";

export default function Map() {
  return (
    <div className="bg-gray-50">
      <div className="md:w-[1000px] md:mx-auto container py-10">
        <p className="text-center md:text-2xl my-2">
          Countries we have offered our services
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
          <div>
            <UG title="Uganda" className="size-[100px]" />
          </div>
          <div>
            <MW title="Malawi" className="size-[100px]" />
          </div>
          <div>
            <ET title="Ethiopia" className="size-[100px]" />
          </div>
          <div>
            <ID title="Indonesia" className="size-[100px]" />
          </div>
          <div>
            <GM title="Gambia" className="size-[100px]" />
          </div>
          <div>
            <MG title="Madagascar" className="size-[100px]" />
          </div>

          <div>
            <DE title="Germany" className="size-[100px]" />
          </div>
          <div>
            <FR title="France" className="size-[100px]" />
          </div>
          <div>
            <KG title="Kyrgyzstan" className="size-[100px]" />
          </div>
          <div>
            <GH title="Rwanda" className="size-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
