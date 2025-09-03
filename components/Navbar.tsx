import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold">Bella Homeschool</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-gray-700 hover:text-gray-900">Home</span>
          </Link>
          {/* Add more navigation links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
