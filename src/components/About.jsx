import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-gradient-to-r from-black to-purple-900 text-center md:text-left"
    >
      <div className="container mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate developer with expertise in HTML5,
            CSS3, JavaScript, and React. I love building responsive,
            user-friendly websites and exploring new technologies. I also have interest in Python and machine learning. 
            I am always eager to learn and grow in my field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
