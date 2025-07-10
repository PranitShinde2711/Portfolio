import React from "react";
import profileImg from "../assets/profileImg.jpg";

const Home = () => {
  return (
    <section
  id="home"
  className="w-full min-h-screen bg-slate-900 text-white flex items-center pt-20"
>

      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
    Hello, It's Me
  </h1>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400">
    PRANIT SHINDE
  </h2>
  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-400">
    And I'm a Software Engineer
  </h3>
  <p className="text-sm sm:text-base md:text-lg text-gray-300">
    I am dedicated to creating innovative solutions and delivering high-quality results and solutions to problems using software tools and technologies.
  </p>
</div>


        {/* Right Profile Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="p-3 sm:p-6 md:p-10">
          <img
    src={profileImg}
    alt="Profile"
    className="w-[350px] aspect-square object-cover object-top rounded-full   p-3"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
