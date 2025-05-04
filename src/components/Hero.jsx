import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-gradient h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
        Hello, I'm <span className="hero-highlight">Charlie</span>
      </h1>
      <p className="text-lg sm:text-xl mt-4 max-w-xl">
        Front-End Developer | Python Developer | Tech Enthusiast
      </p>
      <a
        href="#contact"
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-300 transition duration-300"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;
