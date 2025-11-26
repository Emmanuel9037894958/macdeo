import React from 'react';
import Link from 'next/link';
import { Truck, Clock, MapPin, Globe, Shield, AlertTriangle } from 'lucide-react';

function ShippingPage() {
  const CONTACT_EMAIL = "macdeoresourscesng@gmail.com"; 

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-32 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <header className="text-center mb-12">
          <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Shipping Policy
          </h1>
          <p className="text-lg text-gray-600">
            Reliable and prompt delivery of industrial components across Nigeria.
          </p>
        </header>

        {/* --- Policy Details Grid --- */}
        <div className="space-y-12">

          {/* 1. Order Processing */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <Clock className="w-6 h-6 mr-3 text-green-600" />
              Order Processing Time
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All orders are subject to a processing time of 1–3 business days** prior to shipment. This is the time required for quality check, packaging, and handover to the courier. Processing excludes weekends and Nigerian public holidays. Orders placed after 12:00 PM (WAT) are processed the following business day.
            </p>
          </div>

          {/* 2. Shipping Methods & Carriers */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <MapPin className="w-6 h-6 mr-3 text-green-600" />
              Shipping Methods & Carriers
            </h2>
            <p className="mb-4 text-gray-700">
              We utilize a network of reliable local and national logistics partners to ensure efficient and secure delivery across all 36 states.
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-700">
              <li>
                <span className="font-semibold">Standard Delivery:</span> Estimated 3–7 business days, depending on the state and zone.
              </li>
              <li>
                <span className="font-semibold">Express Delivery:</span> Estimated 1–3 business days (primarily for major cities like Lagos, Abuja, Port Harcourt).
              </li>
              <li>
                <span className="font-semibold">Shipping Cost:</span> Costs are calculated at checkout based on the total weight/volume of the industrial components and the destination zone.
              </li>
              <li>
                <span className="font-semibold">Tracking:</span> A tracking number will be provided via email once your order has been dispatched.
              </li>
            </ul>
          </div>

          {/* 3. International & Customs */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <Globe className="w-6 h-6 mr-3 text-green-600" />
              International Shipping & Customs
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do ship internationally. Please note that customers are responsible for all customs duties, import taxes, and brokerage fees assessed by the destination country's government. These charges are not included in your item price or our shipping cost.
            </p>
          </div>

          {/* 4. Lost or Damaged Goods (Liability) */}
          <div className="p-6 bg-red-50 rounded-xl shadow-lg border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
              Liability: Damaged or Lost Shipments
            </h2>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-700">
              <li>
                <span className="font-semibold">Transfer of Liability:</span> MACDEO-RESOURCES is responsible for your purchase until it is successfully scanned by the courier. Once shipped, liability is transferred to the customer.
              </li>
              <li>
                <span className="font-semibold">Damaged Goods:</span> If your order arrives damaged, please retain all packaging and documentation, and contact us immediately (within 48 hours) at <a href={`mailto:${CONTACT_EMAIL}`} className="text-red-600 hover:underline">{CONTACT_EMAIL}</a> for assistance in filing a claim.
              </li>
              <li>
                <span className="font-semibold">Lost Shipments:</span> We will assist in filing a claim with the courier. Refunds or replacements for lost items will only be processed after the courier completes its official investigation.
              </li>
            </ul>
          </div>

        </div>

        {/* Footer CTA / Contact */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-lg font-medium text-gray-800 mb-3">
            Questions about our shipping methods?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md"
          >
            Contact Customer Support
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ShippingPage;