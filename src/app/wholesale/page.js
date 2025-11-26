"use client";


import React from 'react';
import Link from 'next/link';
import { CheckCircle, Package, Truck, FileText, Banknote } from 'lucide-react';

function WholesalePage() {
  const EMAIL_ADDRESS = "macdeoresourscesng@gmail.com";
  const MIO_AMOUNT = "₦150,000.00"; // Minimum Initial Order (Naira)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="bg-gray-900 text-white py-32 border-b-4 border-green-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Partner with Us: Macdeo-Resources Distributor Program
          </h1>
          <p className="text-xl text-green-300 mb-6">
            Become an authorized supplier of premium industrial fasteners and components across Nigeria.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg"
          >
            Apply to Become a Distributor
          </a>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Why Partner with MACDEO-RESOURCES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-green-500">
              <Package className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality Components</h3>
              <p className="text-sm text-gray-600">
                Access a complete inventory of high-grade nuts, bolts, washers, and specialized fasteners, backed by stringent quality control standards.
              </p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-green-500">
              <Banknote className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing & Margins</h3>
              <p className="text-sm text-gray-600">
                Benefit from exclusive wholesale pricing tiers that ensure healthy profit margins and market competitiveness across Nigeria.
              </p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-green-500">
              <Truck className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Reliable Logistics Support</h3>
              <p className="text-sm text-gray-600">
                Dependable and timely fulfillment across all states, ensuring your inventory is restocked efficiently and reliably.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* 3. Program Requirements & Policy Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Eligibility & Program Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Requirements Box */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" /> Key Requirements
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600 font-bold">•</span>
                  Must hold a **valid CAC Registration Certificate** and Tax ID for operation in Nigeria.
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600 font-bold">•</span>
                  Minimum Initial Order (MIO): A minimum first purchase of **{MIO_AMOUNT}** is required to activate the wholesale account.
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600 font-bold">•</span>
                  Agreement to our **Minimum Advertised Price (MAP) policy to protect market value.
                </li>
              </ul>
            </div>
            
            {/* Policy Link Box */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-red-600" /> Important Documents
              </h3>
              <p className="text-gray-600 mb-4">
                Review the full program details before submitting your application.
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/wholesale-policy" className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium border-b border-blue-600/50 hover:border-blue-800">
                    Full Wholesale Distributor Policy (PDF)
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium border-b border-blue-600/50 hover:border-blue-800">
                    B2B Shipping and Logistics Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Application Form (Placeholder) */}
      <section id="application" className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Wholesale Application Form
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Complete the form below. Our B2B Sales Manager will review your details and respond within **3-5 business days**.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-green-600">
            {/* In a real project, this would be a complex React form 
                connecting to a backend/API endpoint (e.g., via Next.js API Routes). 
                For now, this is a placeholder structure. */}
            
            <form className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (as registered with CAC)</label>
                <input type="text" id="companyName" name="companyName" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="e.g., XYZ Engineering Ltd."/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cacReg" className="block text-sm font-medium text-gray-700">CAC Registration No.</label>
                  <input type="text" id="cacReg" name="cacReg" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder={`Contact us at ${EMAIL_ADDRESS}`}/>
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Primary Product Interest</label>
                <textarea id="interest" name="interest" rows="3" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="e.g., High-tensile hex bolts (M10-M16) and structural washers."></textarea>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WholesalePage;