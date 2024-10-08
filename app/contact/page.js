"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Using Next.js router for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the Google Form link on form submission
    router.push('https://forms.gle/8rzfaKavu7SvB7P39');
  };

  return (
    <Layout>
      <section className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg flex justify-center items-center h-64">
          <button type="submit" className="px-6 py-2 bg-teal-500 text-white rounded-full">Send Message</button>
        </form>
    </section>
    </Layout>
  );
}
