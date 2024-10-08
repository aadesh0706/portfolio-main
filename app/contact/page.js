"use client";
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or message)
    console.log('Submitted:', { name, email, message });
  }; 

  return (
    <Layout>
      <section className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        // <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg">
          // <div className="mb-4">
          //   <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
          //   <input
          //     className="w-full p-2 bg-gray-600 text-white rounded"
          //     type="text"
          //     id="name"
          //     value={name}
          //     onChange={(e) => setName(e.target.value)}
          //     required
          //   />
          // </div>
          // <div className="mb-4">
          //   <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          //   <input
          //     className="w-full p-2 bg-gray-600 text-white rounded"
          //     type="email"
          //     id="email"
          //     value={email}
          //     onChange={(e) => setEmail(e.target.value)}
          //     required
          //   />
          // </div>
          // <div className="mb-4">
          //   <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          //   <textarea
          //     className="w-full p-2 bg-gray-600 text-white rounded"
          //     id="message"
          //     rows="4"
          //     value={message}
          //     onChange={(e) => setMessage(e.target.value)}
          //     required
          //   ></textarea>
          // </div>
          
        // </form>
      <a href="https://forms.gle/8rzfaKavu7SvB7P39"><button type="submit" className="px-6 py-2 bg-teal-500 text-white rounded-full">Send Message</button></a>
    </section>
    </Layout>
  );
}
