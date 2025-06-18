'use client';
import Footer from "@/Components/Footer";
import { Typewriter } from "react-simple-typewriter";

// import Image from "next/image";

function AboutUs() {
  return (
    <section className="bg-white text-gray-800">

      
      <div className="relative w-full h-[450px] sm:h-[550px]">
        <video
        src="/videoB.mp4"
        className="w-full h-full object-cover object-center"
        loop
        autoPlay
        muted
        >

        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* 🔳 Text Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <p className="text-base sm:text-lg leading-relaxed text-justify mt-0">
          At <strong className="text-green-600">Macdeo-Resources Industries</strong>, we are more than just a supplier — we are partners in your progress.
          Specializing in premium-grade nuts, bolts, washers, screws, and industrial fasteners, we have proudly supported clients across
          construction, manufacturing, energy, and automotive sectors for over a decade.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify">
          Our strength lies in combining technical expertise with unwavering dedication to quality and service. Every product we deliver is carefully selected or
          manufactured to meet international standards — ensuring precision, durability, and safety in every connection.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify">
          Whether you are sourcing bulk quantities of hex bolts or custom fasteners for specialized machinery, we understand your challenges and are ready with solutions.
          We work closely with engineers, procurement teams, and project managers to make sure timelines are met and expectations are exceeded.
        </p>

        <h2 className="text-2xl font-semibold mt-10">What Makes Us Different</h2>
        <ul className="list-disc list-inside mt-4 space-y-2 text-base sm:text-lg">
          <li><strong>17 Years of Experience in this business:</strong> Proven track record with hundreds of successful projects.</li>
          <li><strong>I35-Certified Quality:</strong> Industry-grade materials, rigorously tested for reliability.</li>
          <li><strong>Custom Fastener Solutions:</strong> Tailor-made hardware for specialized applications.</li>
          <li><strong>Fast Shipping:</strong> Reliable, global delivery for urgent project needs.</li>
          <li><strong>Customer First:</strong> Friendly support, technical guidance, and post-sale service you can count on.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Industries We Serve</h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify">
          Our products are trusted across a wide range of industries, including:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-base sm:text-lg">
          <li>Construction & Infrastructure</li>
          <li>Automotive & Heavy Machinery</li>
          <li>Oil & Gas</li>
          <li>Renewable Energy</li>
          <li>Marine & Aerospace</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Lets Build Together</h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify">
          At BoltPro, we believe strong partnerships start with strong products — and even stronger trust.
          Lets build the future, one bolt at a time.
        </p>

        <p className="mt-4 text-lg font-medium text-center pb-2">
           Contact Macdeo-Resources today for a custom quote or a free consultation.
        </p>
      <div className ="font-bold text-red-800  text-center pb-0">
         <Typewriter 
       words={['OUR MOTO is:@MACDEO WE SERVE U BETTER.']}
       loop
       cursor
       typeSpeed={70}
       deleteSpeed={50}
       delaySpeed={1000}
       cursorStyle= "|"
       
       />
      </div>
      </div>

      <Footer />
    </section>
  );
}

export default AboutUs;
