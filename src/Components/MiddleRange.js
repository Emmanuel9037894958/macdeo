import { ArrowRight } from "lucide-react";

function MiddleRange() {
  return (
    <section>
      <div>
        <p className="pl-5 pt-5 text-gray-500">
          Experience the Strength of Partnership - Reliable Nuts and Bolts...
        </p>
        <p className="pl-5 pt-2 text-gray-500 hidden md:block">
          Building Trust, One Fastener at a Time...
        </p>
      </div>

      <div>
        <h1 className="absolute pl-18 font-bold text-xl md:text-2xl md:pt-40 pt-25 text-white ">
          MACDEO-RESOURCES Fastener Supply, Services & Custom Solutions....
        </h1>

        {/* ✅ VIDEO FIXED */}
        <video autoPlay loop muted className="mt-5 w-full h-72 object-cover" >
          <source src="/movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="pl-5 text-gray-500">
          <p>
            Quality fasteners are the important of industry needs{" "}
            <span className="text-orange-700">wholesale</span> fasteners...
          </p>
          <p className="pt-2">
            We're Here to Help You Build Something Amazing...
          </p>

          <div className="pt-3">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent animate-pulse ">
                View More
              </span>
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleRange;
