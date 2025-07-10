import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your images here
import project1Img from "../assets/project1.jpg"; // replace with actual image
import project2Img from "../assets/project2.png"; // replace with actual image

const projects = [
  {
    title: "BlockDoc: Blockchain-Based Digital Certificate System",
    image: project1Img,
    tech: "Technologies: Python, Firebase, Solidity, Ganache, Truffle, IPFS (Pinata)",
    description:
      "Developed a secure blockchain-based document authentication system with issuer and verifier roles. Engineered and deployed smart contracts using Solidity and Truffle for efficient contract management. Employed Ganache for blockchain simulation and Firebase for robust user authentication.",
    githubLink: "https://github.com/PranitShinde2711/certificate-validation-blockchain", 
  },
  {
    title: "Real-Time User Interaction Analytics Dashboard",
    image: project2Img,
    tech: "Technologies: Spring Boot, Kafka, Grafana, Micrometer, Prometheus, ReactJS",
    description:
      "Developed a real-time event tracking system that captures user interactions from a React frontend, streams them to Apache Kafka, and processes them using a Spring Boot backend. Leveraged Micrometer to collect custom metrics such as 'Buy Now' clicks, 'Make Payment' clicks, and drop-off rates, visualized in Grafana dashboards for real-time insights into user behavior.",
    githubLink: "https://github.com/PranitShinde2711/Analytics-Manager", 
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="w-screen py-20 px-6 bg-[#2b2d42] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover p-4 md:p-0"
            />

              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-1 italic">
                  {project.tech}
                </p>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
