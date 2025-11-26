import React from 'react';
import Link from 'next/link';
import { Car, Wrench, Shield, Zap } from 'lucide-react';
import Image from 'next/image'; // Assuming you might add product images later

function automotive() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header/Hero Section */}
        <header className="text-center mb-16 bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
          <Car className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Automotive Fasteners & Components
          </h1>
          <p className="text-xl text-gray-600">
            Precision engineering for the assembly and maintenance of vehicles and heavy-duty equipment.
          </p>
        </header>

        {/* --- Key Applications Section --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-3 mb-8 text-gray-900">
            Critical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <Wrench className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Engine & Powertrain</h3>
              <p className="text-sm text-gray-600">
                High-tensile bolts, studs, and specialized fasteners built to withstand extreme heat, vibration, and torque requirements of internal combustion engines and transmissions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <Shield className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Chassis & Safety</h3>
              <p className="text-sm text-gray-600">
                Grade 8.8 and 10.9 structural bolts, wheel studs, and corrosion-resistant fasteners essential for frame integrity, suspension systems, and crucial safety applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <Zap className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Body & Electrical</h3>
              <p className="text-sm text-gray-600">
                Small, precision fasteners, self-tapping screws, and insulated components for securing body panels, interior trims, and supporting electrical wiring harnesses.
              </p>
            </div>
          </div>
        </section>

        {/* --- Featured Products & Standards --- */}
        <section className="mb-16 bg-gray-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-3 mb-8 text-gray-900">
            Standards and Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Products Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                Our Automotive Range
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside pl-4">
                <li>High-Tensile Hex Bolts (Grades 8.8, 10.9, 12.9)</li>
                <li>Prevailing Torque Lock Nuts (Nyloc, All-Metal)</li>
                <li>Flange Bolts and Nuts (for superior load distribution)</li>
                <li>Dome Nuts and Cap Nuts (for aesthetics and corrosion protection)</li>
                <li>Assorted Washers (Flat, Spring, Belleville)</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-300 underline">
                Need a specific ISO/DIN part? Contact our experts.
              </Link>
            </div>

            {/* Standards Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                Quality & Compliance
              </h3>
              <p className="text-gray-700 mb-4">
                All fasteners supplied for automotive use adhere strictly to international standards for safety and reliability:
              </p>
              <ul className="space-y-3 text-gray-700 list-disc list-inside pl-4">
                <li>**ISO (International Organization for Standardization)**</li>
                <li>**DIN (Deutsches Institut für Normung)**</li>
                <li>High-quality materials like Alloy Steel, Stainless Steel (A2/A4), and Brass.</li>
                <li>Finishes including Zinc Plated, Hot-Dip Galvanized, and specialized black oxide coatings for enhanced corrosion resistance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <footer className="text-center py-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Order Your Components?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get a specialized quote for your fleet maintenance or manufacturing needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg transition duration-300 text-lg shadow-xl"
          >
            Request a Quote
          </Link>
        </footer>

      </div>
    </div>
  );
}

export default automotive;