import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={40} className="text-blue-500 hover:scale-110 transition-transform" />,
    link: "https://www.linkedin.com/in/pranit-shinde-2a113b24a/", // Replace with your LinkedIn URL
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="text-white hover:scale-110 transition-transform" />,
    link: "https://github.com/PranitShinde2711", // Replace with your GitHub URL
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={40} className="text-pink-500 hover:scale-110 transition-transform" />,
    link: "https://www.instagram.com/pranit_shinde_27?igsh=OW1pN3hsdWwwaTlk", // Replace with your Instagram URL
  },
  {
    name: "Resume",
    icon: <HiOutlineDocumentText size={40} className="text-green-400 hover:scale-110 transition-transform" />,
    link: "https://github.com/PranitShinde2711/Resume/blob/main/PRANIT_SHINDE_RESUME.pdf", // Replace with your Resume link
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen py-20 px-6 bg-[#1a1e2d] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              {item.icon}
              <p className="text-sm">{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
