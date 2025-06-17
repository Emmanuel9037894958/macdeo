// import React from "react";
import { Check } from "lucide-react";

function LastNote() {
  return (
    <section className="p-4 lg:p-8">
      <div>
        <h1 className="font-bold text-xl md:text-2xl pt-4 pb-3">CUSTOMIZED</h1>
        <h2 className="text-lg md:text-xl">One Stop Solution</h2>
        <p className="text-base md:text-lg">
          Our factory mainly produces all kinds of thread rods, drop-in anchors,
          spring washers, anchor bolts, hex nuts, hex bolts, sleeve anchors with
          DIN, BSW, ANIS, MS, and we also provide OEM services.
        </p>
      </div>
      <div className="mt-4">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <Check
              style={{
                borderRadius: "50%",
                backgroundColor: "green",
                height: "25px",
                width: "50px",
                color: "white",
              }}
            />
            <p className="text-base md:text-lg">
              Advanced equipment, modern management, high-quality steel raw
              materials
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Check
              style={{
                borderRadius: "50%",
                backgroundColor: "green",
                height: "25px",
                width: "67px",
                color: "white",
              }}
            />
            <p className="text-base md:text-lg">
              We create innovative solutions to the demands of our business
              partners with our expert R&D team and engineers.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Check
              style={{
                borderRadius: "50%",
                backgroundColor: "green",
                height: "25px",
                width: "65px",
                color: "white",
              }}
            />
            <p className="text-base md:text-lg">
              We have many years of export experience and solid connections to
              more than 11 states and countries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastNote;
