import React, { useEffect } from "react";
import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase,
  FaGithub, FaGitAlt, FaReact
} from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiGooglescholar } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  {
    category: "Technical",
    items: [
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-purple-500" /> },
      { name: "Kafka", icon: <SiApachekafka className="text-black" /> },
      { name: "Machine Learning", icon: <SiGooglescholar className="text-green-600" /> },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
    ],
  },
];

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
    <section id="skills" className="w-screen py-20 px-6 bg-[#243447] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((skill, i) => (
                  <li
                  key={i}
                  className="flex justify-center items-center gap-2 text-lg"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
                
                
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
