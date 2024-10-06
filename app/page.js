"use client";
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
        </div>
      </section>
    </Layout>
  );
}
