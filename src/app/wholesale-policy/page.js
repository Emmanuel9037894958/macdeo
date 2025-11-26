export default function WholesalePolicy() {
  return (
    <div className="p-10 py-32">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Wholesale Distributor Policy
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Thank you for your interest in becoming our wholesale distributor.
        Below is the full policy document. You can download the official PDF
        using the link provided.
      </p>

      <a
        href="/wholesale-policy.pdf"
        target="_blank"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Download Full Wholesale Distributor Policy (PDF)
      </a>
    </div>
  );
}
