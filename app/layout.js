import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Aadesh Gulumbe",
  description: "I'm a passionate software developer currently pursuing a degree in Information Technology at PCET's NMIET Talegaon Dabhade, Pune. With over 35 repositories and numerous projects across different fields like web development, IoT, and mobile apps, I thrive on solving real-world problems using innovative tech solutions.",
  keywords: "Aadesh Gulumbe, software developer, portfolio, web development, IoT, mobile apps, IT student, coding, programming, GitHub projects",
  author: "Aadesh Gulumbe",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", // Allow search engines to index and follow links
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aadesh Gulumbe",
              jobTitle: "Software Developer",
              url: "https://aadeshgulumbe.me",
              sameAs: [
                "https://www.linkedin.com/in/aadesh-gulumbe-b965b0246",
                "https://github.com/aadesh0706",
                "https://www.youtube.com/@marathicodingzone",
              ],
              image: "/path/to/your/image.jpg", // Replace with your actual image path
              description:
                "I'm a passionate software developer currently pursuing a degree in Information Technology.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
