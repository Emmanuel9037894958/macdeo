"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

function FormInput() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    Producttype: "",
    number: "",
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", userData);

    router.push("/contact");
  };

  return (
    <div className="bg-green-900 text-white font-bold">
      <h1 className="text-2xl text-center pt-4">Request Quote</h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-md mx-auto p-4 md:p-8 lg:p-12"
      >
        <label htmlFor="name" className="">
          {" "}
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={userData.name}
          placeholder="Name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="pl-4 w-full h-10 border rounded-full focus:border-blue-300"
        />

        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={userData.email}
          placeholder="Email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="pl-4 w-full h-10 border rounded-full focus:border-blue-300"
        />

        <label htmlFor="number" className="">
          Number
        </label>
        <input
          type="number"
          id="number"
          value={userData.number}
          placeholder="Number"
          onChange={(e) => setUserData({ ...userData, number: e.target.value })}
          className="pl-4 w-full h-10 border rounded-full focus:border-blue-300"
        />

        <label htmlFor="Producttype" className="">
          Product Type
        </label>
        <input
          type="text"
          id="Producttype"
          value={userData.Producttype}
          placeholder="Product Type"
          onChange={(e) =>
            setUserData({ ...userData, Producttype: e.target.value })
          }
          className="pl-4 w-full h-10 border rounded-full focus:border-blue-300"
        />

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 w-62 animate-pulse"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent font-bold text-lg">
              Submit
            </span>
            {/* <ArrowRight className="text-white ml-2" /> */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormInput;
