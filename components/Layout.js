"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
        <title>Aadesh Gulumbe | Software Developer | Portfolio</title>
        <meta name="description" content="Aadesh Gulumbe - Software Developer, specializing in web and mobile applications. Explore my projects, blog, and more on my portfolio website." />
        <meta name="keywords" content="Aadesh Gulumbe, software developer, web development, mobile development, portfolio, JavaScript, React, Node.js" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://aadeshgulumbe.me" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aadesh Gulumbe | Software Developer | Portfolio" />
        <meta property="og:description" content="Aadesh Gulumbe - Software Developer, specializing in web and mobile applications. Explore my projects, blog, and more on my portfolio website." />
        <meta property="og:image" content="https://aadeshgulumbe.me/path-to-your-image.jpg" />
        <meta property="og:url" content="https://aadeshgulumbe.me" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aadesh Gulumbe | Software Developer | Portfolio" />
        <meta name="twitter:description" content="Aadesh Gulumbe - Software Developer, specializing in web and mobile applications. Explore my projects, blog, and more on my portfolio website." />
        <meta name="twitter:image" content="https://aadeshgulumbe.me/path-to-your-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aadesh Gulumbe",
              "jobTitle": "Software Developer",
              "url": "https://aadeshgulumbe.me",
              "sameAs": [
                "https://www.linkedin.com/in/aadesh-gulumbe-b965b0246",
                "https://github.com/aadesh0706",
                "https://www.youtube.com/@marathicodingzone"
              ],
              "image": "https://aadeshgulumbe.me/path-to-your-image.jpg", // Replace with your actual image path
              "description": "Aadesh Gulumbe is a passionate software developer who is working on innovative web and mobile applications. Check out my portfolio for more."
            }),
          }}
        />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md">
        <div className="container mx-auto p-4 flex justify-between">
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

      {/* Footer with Social Links */}
      <footer className="bg-gray-800 text-center py-4">
        <div className="mb-4 flex justify-center">
          <Link href="https://github.com/aadesh0706" target="_blank" className="mx-2 text-gray-200 hover:text-teal-500">GitHub</Link>
          <Link href="https://www.linkedin.com/in/aadesh-gulumbe-b965b0246" target="_blank" className="mx-2 text-gray-200 hover:text-teal-500">LinkedIn</Link>
          <Link href="https://www.youtube.com/@marathicodingzone" target="_blank" className="mx-2 text-gray-200 hover:text-teal-500">YouTube</Link>
        </div>
        <p className="text-sm text-gray-200">© {new Date().getFullYear()} Aadesh Gulumbe</p>
      </footer>
    </div>
  );
};

export default Layout;
