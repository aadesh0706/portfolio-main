"use client";
// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode based on user's preference
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <div>
    <Head>
        <title>Aadesh Gulumbe - Portfolio</title>
        <meta name="description" content="Aadesh Gulumbe - Software Developer Portfolio" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md">
        <div className="container mx-auto p-4 flex justify-between">
          {/* <div className="font-bold text-2xl text-blue-300">Aadesh Gulumbe</div> */}
          <Link href="/" className="text-3xl font-bold hover:text-teal-500">
              Aadesh Gulumbe
            </Link>
          <div className="space-x-6">
            <Link href="/" className="text-lg text-gray-200 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-lg text-gray-200 hover:text-blue-600">About</Link>
            <Link href="/projects" className="text-lg text-gray-200 hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="text-lg text-gray-200 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-center py-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Aadesh Gulumbe. All rights reserved.</p>
      </footer> */}
      {/* Footer with Social Links */}
      <footer className="bg-gray-800 text-center py-4">
          <div className="mb-4 flex justify-center">
            <Link href="https://github.com/aadesh0706" target="_blank" className="mx-2 text-gray-400 hover:text-blue-400">
              <i className="fa fa-github fa-lg"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/aadesh-gulumbe-b965b0246" target="_blank" className="mx-2 text-gray-400 hover:text-blue-400">
              <i className="fa fa-linkedin fa-lg"></i>
            </Link>
            <Link href="https://www.youtube.com/@marathicodingzone" target="_blank" className="mx-2 text-gray-400 hover:text-blue-400">
              <i className="fa fa-youtube fa-lg"></i>
            </Link>
            <Link href="https://aadesh0706.github.io/portfolio/" target="_blank" className="mx-2 text-gray-400 hover:text-blue-400">
              <i className="fa fa-globe fa-lg"></i>
            </Link>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Aadesh Gulumbe. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Layout;
