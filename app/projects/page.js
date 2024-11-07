"use client";
import Layout from '../../components/Layout';

export default function Projects() {

  const projects = [
    {
      title: "Booksnap",
      description: "A platform for college students to resell books and connect with peers.",
      github: "https://github.com/aadesh0706/BookSnap",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO5SURBVHgB7Vm9ThwxEPbuHRfQHUECpAsEEBUFLZQUFGl4AF6Bip4iipQUKEo63oCeIkWqFEg0dKFDFESJ+JM4QETiT0i3LM58e3a0e7c/410f1X3Snr1ez/izZzz22UL00AMLTnvBxMTEQK1Wezc8PPym2Wz+pcdDueu6zjPhieA4zjOV/yL8kVI6Kysr8w8PDwNUR6Ku7/tS69P5vr4+PL83NzcbkNnY2JgvlUpVUulADgjzQBk1Jcrl8vHq6upxO89y+GV/f7+ysLDwk0jMNhqNVrdkZ29JqaDOfaLsx7W1tdrl5eU3avdtW9sRPD4+ykql8oGy6zs7O6/o/Tvl6yIFNEDoz3vKfk4lvru7K6nyrBJS0p0KQZAeF3lYAYnIBkY2yJBVJVeG4Md9cMMvZHJUehIMaNPe3t4GJFr8+YC7YXDSHoBczRNZxMmEePdFl0CdKyE9OzsDqzJHBu4SVx4hfnV1hUp5iEtOJSLhCkuIKFpeXkbCJR6QrVarLNK2ESG+tbWFhOusL0JYh9iO8pgyI0JDQ0PSeGYagCZnbHmcqxgRv76+lkkhKwnT09Pw9xKnrvM/LkfRHlUSlpx4nQn5TBLn5+dYWVgySYgQPzw8dLgkNO7u7tgymuzk5KTggjXic3Nz4gVhb8RtKExD0mKSIRM78YsQl9F81/obiwjxvb09wQVFwID44OAgUsmZ09rHLy4u2L1kLfkzMzNsU+Y0eyBTr9cLt5Oyd0jXrUe8AArJpxBPt2bROMxF0qJcOI4DXLex2dm4OG6sXKb9ZyuIHD5uH/jDLSzBygLUWpa74/JJ7mXLVRyTOK5gtDFrR8eIc1nbNHsaWCOOlZO7dmviIyMjxrtDGygyOY3NbhO59yoWYG/lNNmriByjrE+yTk9P2TI4W4zVFX5ZXFzs6j93vXyPjY2pHWV+FPHx3LtDE3l2OHwJHB0dISl0pBF3IMQaifCujRvmwo2RDIu4yYgbucDNzU2S7g5opjhm5gqxFiB1IMSD2+JBlwAO93AnD0x2h7wRf26Fw/Hx8VYDBtFRHTMXml+5ieuYHAiQOSVvkxVYCdcqggmWqyiwhs5POo3MEMPP1NSU5P75SHLDyK2AOjvMJI429Qnt/f09fNzFXEvjor4HFU5OThx1MaW/ihRDZxOnldPv7+9fpyu617h7IcVNRRBaXewIcWmFIrr624YM3b55JPPF87xRuv5DdR8ugQf11S0EPoDoD8gsLS15BwcHX+n7aIiYVHXdsDVI77booYf8+Ad01bw56NeYLgAAAABJRU5ErkJggg=="
    },
    {
      title: "IoT Distance Detector",
      description: "An IoT project that detects the distance between objects.",
      github: "https://github.com/aadesh0706/Ultrasonic",
      image: "https://img.youtube.com/vi/MzA-ijNaAXc/0.jpg"
    },
    {
      title: "YouTube Adblocker",
      description: "A Chrome extension to block YouTube ads.",
      github: "https://github.com/aadesh0706/Youtube-AdBlocker",
      image: "https://img.youtube.com/vi/bFTARWEsZDw/0.jpg"
    },
    {
        title: "Introduction To Python",
        image: "https://img.youtube.com/vi/XdTg0RgOQ0k/0.jpg", // Replace with the actual image path
        youtube: "https://youtu.be/XdTg0RgOQ0k?si=69wMligUzwwKBzB5",
        description: "A comprehensive introduction to Python programming, covering the basics and key concepts to get started with coding."
    },
    {
        title: "Mojo Programming Language: The Future of AI Development",
        image: "https://img.youtube.com/vi/82QU7GDM4BE/0.jpg", // Replace with the actual image path
        youtube: "https://youtu.be/82QU7GDM4BE",
        description: "An exploration of Mojo, a new programming language designed for AI development, showcasing its features and potential applications."
    },
    {
        title: "How to Submit LetsUpgrade Assignment and get Certificate",
        image: "https://img.youtube.com/vi/3jXOOVGAg6s/0.jpg", // Replace with the actual image path
        youtube: "https://youtu.be/3jXOOVGAg6s?si=8UIdwn1uExqKfEWO",
        description: "A tutorial on how to effectively submit assignments on the LetsUpgrade platform and obtain certificates for your courses."
    }
];


  return (
    <Layout>
      {/* Projects Section */}
      <section className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 shadow-md p-6 rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                className="text-blue-300 hover:underline"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
        <Link href="https://drive.google.com/drive/folders/1FfXPK5TsR74SM5ewjydE8vV4aaiGgFZm?usp=drive_link">
            <a color="primary" type="button" radius="sm">
                    Login
              </a>
        </Link>
          ))}
        </div>
      </section>

     </Layout>
  );
}
