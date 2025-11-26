// "use client";

// import { Check } from "lucide-react";

// export default function LastNote() {
//   const items = [
//     "Advanced equipment, modern management, high-quality steel raw materials",
//     "We create innovative solutions for our partners with our expert R&D team and engineers.",
//     "We have many years of export experience with strong connections to more than 11 states and countries.",
//   ];

//   return (
//     <section className="p-5 md:p-10 bg-gray-50">
//       {/* Heading */}
//       <div className="text-center md:text-left">
//         <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
//           CUSTOMIZED
//         </h1>
//         <h2 className="text-lg md:text-xl text-green-700 font-semibold mt-1">
//           One Stop Solution
//         </h2>
//         <p className="text-gray-700 text-base md:text-lg mt-3 leading-relaxed max-w-3xl">
//           Our factory mainly produces all kinds of thread rods, drop-in anchors,
//           spring washers, anchor bolts, hex nuts, hex bolts, sleeve anchors with
//           DIN, BSW, ANIS, MS. We also provide complete OEM services tailored
//           to your needs.
//         </p>
//       </div>

//       {/* List Items */}
//       <div className="mt-6 md:mt-8">
//         <div className="space-y-5">
//           {items.map((text, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-4"
//             >
//               <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 shadow-md flex-shrink-0">
//                 <Check size={18} className="text-white" />
//               </div>

//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { Check } from "lucide-react";

export default function LastNote() {
  const items = [
    "We supply high-grade nuts, bolts, washers, and fasteners built to handle heavy-duty industrial and construction use.",
    "Our factory uses advanced production machines, precision cutting, and strict quality control to ensure every bolt fits perfectly.",
    "We create custom fasteners and metal components for clients who need specialized sizes, coatings, or strength levels.",
    "With strong export experience and reliable logistics partners, we deliver safely to over 11 states and multiple countries.",
    "Our engineering and R&D team provides expert guidance on choosing the right fasteners for your project or industry.",
    "We maintain a large, ready-to-ship stock of anchors, threaded rods, hex bolts, and structural fasteners for urgent orders."
  ];

  return (
    <section className="p-5 md:p-10 bg-gray-50">
      {/* Heading */}
      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
          CUSTOMIZED
        </h1>
        <h2 className="text-lg md:text-xl text-green-700 font-semibold mt-1">
          One Stop Solution
        </h2>
        <p className="text-gray-700 text-base md:text-lg mt-3 leading-relaxed max-w-3xl">
          We are a trusted manufacturer and supplier of all types of fasteners,
          including thread rods, drop-in anchors, spring washers, hex nuts, 
          anchor bolts, sleeve anchors, and precision-engineered bolts.  
          Whether you are in construction, manufacturing, automotive, or 
          general hardware supply, we provide reliable products and complete 
          OEM services customized to your exact specifications.
        </p>
      </div>

      {/* List Items */}
      <div className="mt-6 md:mt-8">
        <div className="space-y-5">
          {items.map((text, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 shadow-md flex-shrink-0">
                <Check size={18} className="text-white" />
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
