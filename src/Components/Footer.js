// import { LucidePhoneIncoming, LinkedinIcon, Mail, Facebook } from "lucide-react";
// import Link from "next/link";

// function Footer() {
//   return (
//     <section className="bg-green-950">
//       <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
//         <div>
//           <div className="flex gap-3 pl-2 pt-3">
//             <LucidePhoneIncoming className="rounded-full" />
//             <h1>Mobile: +234 8036080097</h1>
//           </div>
//           <div className="flex gap-3 pl-2 pt-3">
//            <Link  href="/contact">
//             <Mail />
//            </Link>
//             <h2 className="font-light">macdeoresourscesng@gmail.com</h2>
//           </div>
//           <div className="flex gap-3 pl-2 pt-4">
//             <a href="https://www.facebook.com/ekene.onyebuchi.71?mibextid=..." target="_blank" rel="noopener noreferrer">
//               <Facebook className="rounded-full bg-blue-700" fill="white" />
//             </a>
//             <h1 className="truncate max-w-xs">
//               https://www.facebook.com/ekene.onyebuchi.71
//             </h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-3 text-lg font-serif pl-5 pt-5">
//           <h2>Automotive</h2>
//           <h2>Electrical Supplies</h2>
//           <h2>Fittings</h2>
//           <h2>Fasteners</h2>
//           <h2>Surface Preparation</h2>
//           <h2>Industrial Storage</h2>
//           <h2>Safety</h2>
//         </div>

//         <div className="flex flex-col pl-5 pt-4 gap-3">
//           <h2>About Us</h2>
//           <h2>Contact Us</h2>
//           <h2>Refund Policy</h2>
//           <h2>Shipping Policy</h2>
//           <h2>Wholesale Distributor</h2>
//           <h2>+234 8036080097</h2>
//         </div>

//         <hr className="my-6 border-white sm:mx-auto lg:my-8" />

//         <div className="sm:flex sm:items-center sm:justify-between">
//           <span className="text-sm text-white sm:text-center dark:text-white">
//             © 2025 . All Rights Reserved.
//           </span>

//           <div className="flex mt-4 sm:justify-center sm:mt-0">
//             {/* Facebook icon (SVG) */}
//             <a
//               href="https://www.facebook.com/ekene.onyebuchi.71?mibextid=..."
//               className="text-white hover:text-gray-900 dark:hover:text-white"
//             >
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 8 19"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>

//             {/* Discord icon (SVG) */}
//             <a
//               href="#"
//               className="text-white hover:text-gray-900 dark:hover:text-white ml-5"
//             >
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 21 16"
//               >
//                 <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
//               </svg>
//               <span className="sr-only">Discord community</span>
//             </a>

//             {/* LinkedIn icon */}
//             <a
//               href="#"
//               className="text-white hover:text-gray-900 dark:hover:text-white ml-5"
//             >
//               <LinkedinIcon />
//             </a>

//             {/* GitHub icon */}
//             <a
//               href="#"
//               className="text-white hover:text-gray-900 dark:hover:text-white ml-5"
//             >
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="sr-only text-white">GitHub account</span>
//             </a>

//             {/* Additional icon */}
//             <a
//               href="#"
//               className="text-white hover:text-gray-900 dark:hover:text-white ml-5"
//             >
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;



import { LucidePhoneIncoming, LinkedinIcon, Mail, Facebook } from "lucide-react";
import Link from "next/link"; // For internal links
// We will use standard <a> for external links (Facebook, etc.)

function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  const FACEBOOK_URL = "https://www.facebook.com/ekene.onyebuchi.71"; // Use the clean URL
  const CONTACT_NUMBER = "+234 8036080097";
  const EMAIL_ADDRESS = "macdeoresourscesng@gmail.com";

  // List data for clean rendering
  const categories = [
    "Automotive",
    "Electrical Supplies",
    "Fittings",
    "Fasteners",
    "Surface Preparation",
    "Industrial Storage",
    "Safety",
  ];
  
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Wholesale Distributor", href: "/wholesale" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-green-800 text-white shadow-xl">
      <div className="mx-auto w-full max-w-screen-xl p-8 md:p-12">
        
        {/* === Grid Layout for Content Columns === */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-16">

          {/* Column 1: Contact Information */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-700 pb-2">
              Contact
            </h3>
            
            <div className="flex flex-col gap-4 text-sm font-light">
              <div className="flex items-start gap-3">
                <LucidePhoneIncoming className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <a href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`} className="hover:text-green-300 transition duration-300">
                  Mobile: {CONTACT_NUMBER}
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <Link href="/contact" className="hover:text-green-300 transition duration-300">
                  <span className="sr-only">Go to Contact Page</span>
                  {EMAIL_ADDRESS}
                </Link>
              </div>

              {/* Social Media Link in Contact Section */}
              <div className="flex items-center gap-3 mt-2">
                <a 
                  href="https://www.facebook.com/ekene.onyebuchi.71" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-110 transition duration-300"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-6 h-6 rounded-full bg-blue-700 p-1 text-white" />
                </a>
                
              </div>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-700 pb-2">
              Categories
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              {categories.map((item) => (
                <li key={item}>

                    {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links (About/Policy) */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-700 pb-2">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-green-300 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* Phone number repeated here for visibility */}
              <li className="text-gray-400 mt-2">
                 Call: {CONTACT_NUMBER}
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Icons (Centralized) */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-700 pb-2">
              Connect
            </h3>
            <div className="flex space-x-4">
              {/* Use Lucide icons directly for better control */}
              
              {/* Facebook */}
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a 
                href="#" // Replace with actual LinkedIn URL
                className="text-gray-400 hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>

              {/* Mail (Use mailto link for quick access) */}
              <a 
                href={`mailto:${EMAIL_ADDRESS}`}
                className="text-gray-400 hover:text-red-500 transition duration-300"
                aria-label="Email Address"
              >
                <Mail className="w-6 h-6" />
              </a>

            </div>
          </div>
        </div>

        {/* === Divider === */}
        <hr className="my-10 border-gray-700" />

        {/* === Bottom Bar (Copyright) === */}
        <div className="sm:flex sm:items-center sm:justify-between text-center">
          <span className="text-sm text-gray-400">
            &copy; {CURRENT_YEAR} Macdeo Resources. All Rights Reserved.
          </span>
          {/* Note: Social icons are already in the main grid section, removing the redundant set here. */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;