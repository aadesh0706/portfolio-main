"use client";
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Hi, I'm Aadesh Gulumbe</h1>
          <p className="mt-4 text-xl">Software Developer & Innovator</p>
          <div className="mt-8 space-x-4">
            <Link href="/projects">
              <button className="px-6 py-2 bg-teal-500 text-white rounded-full">View My Projects</button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2 border-2 border-teal-600 text-teal-600 rounded-full">Contact Me</button>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="https://github.com/aadesh0706" target="_blank">
              <div className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faGithub} size="2x" className="text-white" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/aadesh-gulumbe-b965b0246" target="_blank">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
              </div>
            </Link>
            <Link href="https://www.youtube.com/@marathicodingzone" target="_blank">
              <div className="p-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" />
              </div>
            </Link>
          </div>

          {/* Profile Views Badge */}
          <div className="mt-4 flex justify-center">
            <img src="https://komarev.com/ghpvc/?username=aadesh0706&color=blue" alt="Profile Views" className="w-auto h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
