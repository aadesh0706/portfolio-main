"use client";
import Layout from '../../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          I'm Aadesh Gulumbe, a software developer with a passion for innovation and technology.
          I have experience in various programming languages and frameworks.
        </p>
        <p className="text-lg">
          I am currently pursuing a BE degree in Information Technology and have completed several projects
          that showcase my skills in web development, IoT, and more.
        </p>
      </section>
    </Layout>
  );
}
