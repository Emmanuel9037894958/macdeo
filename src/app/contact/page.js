"use client";

import Image from "next/image";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xzzggbee");

  if (state.succeeded) {
    return (
      <p className="text-center mt-10 text-green-600 font-bold text-2xl">
        Successful 🤝 we will get back to you soon!
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 z-50">
      <div className="relative">
        <Image
          className="fixed top-0 left-0 z-50"
          src="/logo.png"
          alt="logo-image"
          width={140}
          height={100}
        />

        <h2 className="text-3xl font-bold text-white absolute pt-30 pl-10 top-0 left-0 p-4 z-50">
          Get in Touch...
        </h2>

        <Image
          className="w-full object-cover brightness-50 mt-0"
          src="/telephone.jpg"
          alt="telephone"
          width={1920}
          height={400}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-2 gap-10 -mt-20 relative z-10">
        <div>
          <p className="mb-6">
            We&apos;d love to hear from you. Please fill out the form below and we&apos;ll
            get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} method="POST" className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                placeholder="name"
                id="name"
                type="text"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                placeholder="@gmail.com"
                id="email"
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Company Info / Map */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h3>
          <p className="text-gray-600">
            Don&apos;t hesitate to reach out to us through any of the following channels.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              📍 <strong>Address:</strong>Shop No 14/15 plot 208/210 Oshodi/apapa express way Ilasamaja, Lagos State.
            </li>
            <li>
              📞 <strong>Phone:</strong> +234 8036080097
            </li>
            <li>
              ✉️ <strong>Email:</strong> Macdeoresourcesng@gmail.com
            </li>
          </ul>

          <div className="w-full h-64 mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.123456789012!2d3.2851911!3d6.479146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b89135b237099%3A0xacf91e1cc2a3d85e!2sApapa-Oshodi+Express+Way!5e0!3m2!1sen!2sng!4v1686781234567!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
