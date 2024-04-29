"use client";
import WorldMap from "react-svg-worldmap";


export default function Map() {
  const data = [
    { country: "ug", value: 1389618778 },
    { country: "mw", value: 1389618778 },
    { country: "et", value: 1389618778 },
    { country: "id", value: 1389618778 },
    { country: "gm", value: 1389618778 },
    { country: "mg", value: 1389618778 },
    { country: "de", value: 1389618778 },
    { country: "fr", value: 1389618778 },
    { country: "kg", value: 1389618778 }, 
    { country: "rw", value: 1389618778 },
  ];

  return (
    <>
      <div className="container worldmap-container">
        <WorldMap
          color="blue"
          value-suffix="people"
          size="xxl"
          data={data}
        />
      </div>
    </>
  );
}