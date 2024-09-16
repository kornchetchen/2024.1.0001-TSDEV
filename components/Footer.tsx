import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-4 md:mb-0">
            <Image
              src="/assets/PKRU.png"
              alt="PKRU Logo"
              width={50}
              height={50}
              className="mb-2"
            />
            <h2 className="text-xl font-bold mb-2">
              Phuket Rajaphat University Collage
            </h2>
            <p className="text-sm mb-2">Faculty of Computer Science</p>
            <p className="text-sm mb-2">
              Empowering the world through discovery.
            </p>
            <p className="text-sm mb-4">world through discovery.</p>
            <Link href="/about" className="text-sm hover:underline">
              About PKRU
            </Link>
            <Link
              href="/join-us"
              className="text-sm hover:underline ml-4 bg-red-600 px-2 py-1 rounded"
            >
              Admissions
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Link href="/" className="block hover:underline">
                Home
              </Link>
              <Link href="/news" className="block hover:underline">
                News & Events
              </Link>
              <Link href="/multimedia" className="block hover:underline">
                Export
              </Link>
              <Link href="/PKRU-live" className="block hover:underline">
                Multimedia
              </Link>
              <Link href="/missions" className="block hover:underline">
                Research
              </Link>
            </div>
            <div>
              <Link href="/humans-in-space" className="block hover:underline">
                Departments
              </Link>
              <Link href="/earth-and-climate" className="block hover:underline">
                Earth & Climate
              </Link>
              <Link href="/solar-system" className="block hover:underline">
                Computer Science
              </Link>
              <Link href="/universe" className="block hover:underline">
                The Universe
              </Link>
              <Link href="/science" className="block hover:underline">
                Engineering
              </Link>
            </div>
            <div>
              <Link href="/aeronautics" className="block hover:underline">
                Aeronautics
              </Link>
              <Link href="/technology" className="block hover:underline">
                Technology
              </Link>
              <Link href="/learning" className="block hover:underline">
                Learning Resources
              </Link>
              <Link href="/about" className="block hover:underline">
                About PKRU
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold mb-2">Follow PKRU</p>
            {/* Add social media icons here */}
            <p className="mt-4">More PKRU Social Accounts</p>
            <p>PKRU Newsletters</p>
          </div>
        </div>

        {/* Footer links */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-wrap justify-start gap-4 text-xs">
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
            <Link href="/media" className="hover:underline">
              For Media
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/office-ig" className="hover:underline">
              Office of the IG
            </Link>
            <Link href="/budget" className="hover:underline">
              Budget & Annual Reports
            </Link>
            <Link href="/financial-reports" className="hover:underline">
              Agency Financial Reports
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact PKRU
            </Link>
            <Link href="/accessibility" className="hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
