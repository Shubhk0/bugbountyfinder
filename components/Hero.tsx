import Link from 'next/link';
import { FaSearch, FaShieldAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Find Beginner-Friendly Bug Bounty Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover the perfect bug bounty programs to kickstart your ethical hacking journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/programs" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition">
              <FaSearch className="mr-2" />
              Browse Programs
            </Link>
            <Link href="/resources" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition">
              <FaShieldAlt className="mr-2" />
              Learning Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}