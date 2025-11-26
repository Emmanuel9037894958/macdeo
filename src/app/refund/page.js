import React from 'react';
import Link from 'next/link';
import { RefreshCcw, Ban, Mail } from 'lucide-react';
import NairaSign from '@/Components/NairaSign';

function RefundPage() {
  const CONTACT_EMAIL = "macdeoresourscesng@gmail.com"; 

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-32 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <header className="text-center mb-12">
          <NairaSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Refund & Return Policy
          </h1>
          <p className="text-lg text-gray-600">
            Commitment to quality and fair returns for our valued clients.
          </p>
        </header>

        {/* --- Policy Details Grid --- */}
        <div className="space-y-12">

          {/* 1. Policy Overview & Return Window */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <RefreshCcw className="w-6 h-6 mr-3 text-green-600" />
              Return Window and Eligibility
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At , we stand behind the quality and precision of our industrial components. If you are not completely satisfied with your purchase, you may request a refund or exchange subject to the following terms:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-700">
              <li>
                <span className="font-semibold">Return Window:</span> Eligible products must be requested for return within 30 days of the delivery date.
              </li>
              <li>
                <span className="font-semibold">Condition:</span> Items must be unused, in the same condition that you received them, and in their original, unopened packaging.
              </li>
              <li>
                <span className="font-semibold">Proof of Purchase:</span> A valid order number or receipt is strictly required for all returns.
              </li>
            </ul>
          </div>

          {/* 2. Non-Refundable Items & Fees */}
          <div className="p-6 bg-yellow-50 rounded-xl shadow-lg border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <Ban className="w-6 h-6 mr-3 text-yellow-600" />
              Non-Returnable Items & Restocking Fee
            </h2>
            <p className="text-gray-700 font-semibold mb-4">
              The following items are exempt from being returned or refunded:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-700">
              <li>
                Custom-fabricated components or specialized items ordered specifically for the client.
              </li>
              <li>
                Bulk/Wholesale orders that exceed our standard retail quantities.
              </li>
              <li>
                Any item marked as Clearance or Final Sale.
              </li>
              <li>
                <span className="font-semibold text-red-700">Restocking Fee:</span> A 15% restocking fee may be applied to returns of specialized or large-quantity standard fasteners to cover inspection and inventory management costs.
              </li>
            </ul>
          </div>

         
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <Mail className="w-6 h-6 mr-3 text-green-600" />
              The Return Process
            </h2>
            <ol className="list-decimal list-inside space-y-4 pl-4 text-gray-700">
              <li>
                Initiate Request: Email us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-green-600 hover:underline">{CONTACT_EMAIL}</a> with your order number and detailed reason for the return.
              </li>
              <li>
                Receive RMA: If your request is approved, you will receive a Return Merchandise Authorization (RMA) number and shipping instructions. Returns sent without an RMA will be rejected.
              </li>
              <li>
                Shipping: The customer is responsible for return shipping costs. Please use a traceable courier service. Shipping costs are only refundable if the return is due to an error on our part (e.g., defective or incorrect item).
              </li>
              <li>
                Inspection:** Once we receive the components, they will be inspected to verify their condition and eligibility.
              </li>
            </ol>
          </div>
          
          {/* 4. Refund Issuance */}
          <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <NairaSign className="w-6 h-6 mr-3 text-green-600" />
              Refund Processing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If your return is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment (or bank account via transfer) within 7–14 business days** after the inspection is completed. Please allow extra time for the bank processing to reflect on your statement.
            </p>
          </div>
        </div>

        {/* Footer CTA / Contact */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-lg font-medium text-gray-800 mb-3">
            For specific inquiries regarding damaged goods, please visit our <Link href="/shipping" className="text-green-600 hover:text-green-700 underline">Shipping Policy</Link>.
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

export default RefundPage;