"use client";
import Link from 'next/link';
import Layout from '../../components/Layout';
export default function About() {
  return (
    <Layout>
      <section className="container mx-auto p-8">
        {/* About Me Section */}
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          Hi, I'm <span className="font-bold text-teal-600">Aadesh Gulumbe</span>, a passionate software developer
          and tech enthusiast. I love transforming ideas into impactful solutions using cutting-edge technologies.
        </p>
        <p className="text-lg mb-4">
          Currently pursuing a BE degree in Information Technology at PCET's NMIET, I specialize in areas such as
          web development, IoT, and app development. My curiosity drives me to constantly explore new technologies
          and innovations.
        </p>

        {/* Stats Section */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-teal-600">35+</h3>
            <p className="text-lg text-gray-700">GitHub Repositories</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-teal-600">5+</h3>
            <p className="text-lg text-gray-700">IoT Projects</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-teal-600">3rd</h3>
            <p className="text-lg text-gray-700">Rank in Class</p>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold mt-8 mb-4">Skills & Expertise</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Proficient in web technologies such as React.js, Next.js, Express.js, and Firebase</li>
          <li>IoT development and integration with ESP32</li>
          <li>Mobile app development with Flutter</li>
          <li>Strong understanding of data analytics and AI-driven tools</li>
        </ul>

        {/* Highlighted Project Section */}
        <h2 className="text-3xl font-bold mt-8 mb-4">Highlighted Projects</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="border rounded-lg p-4 bg-gray-50 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200">
                <img src="https://img.youtube.com/vi/AEb33trYEAY/0.jpg" alt="Wi-Fi Hacking Project" className="rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  IoT ESP32 Evil Twin WiFi Hacking Deauthentication Captive Portal
                </h3>
                <p className="text-gray-600">
                  Developed a tool for analyzing and securing Wi-Fi networks, focusing on ethical hacking practices.
                </p>
                <a href="https://github.com/aadesh0706/IOT-ESP32-Evil-Twin-WiFi-Hacking-Deauthentication-Captive-Portal" className="text-teal-600 underline">
                  View Project
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="border rounded-lg p-4 bg-gray-50 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200">
                <img src="https://img.youtube.com/vi/MzA-ijNaAXc/0.jpg" alt="IoT Distance Major Project" className="rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">IoT Distance Detection</h3>
                <p className="text-gray-600">
                  An IoT-based project that detects the distance between objects and displays the data on a web interface, enhancing automation and monitoring.
                </p>
                <a href="https://github.com/aadesh0706/IoT-Distance-Detection" className="text-teal-600 underline">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <h2 className="text-3xl font-bold mt-8 mb-4">Fun Facts About Me</h2>
        <ul className="list-disc list-inside text-lg">
          <li>I love playing Space Invaders, and I'm building my own version of it!</li>
          <li>I run a YouTube channel where I teach coding in Marathi: <a href="https://www.youtube.com/@marathicodingzone" className="text-teal-600 underline">Marathi Coding Zone</a></li>
          <li>When I'm not coding, you'll find me experimenting with new IoT gadgets or automating everyday tasks.</li>
        </ul>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <Link href="/contact">
            <button className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
