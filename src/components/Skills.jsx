import React from "react";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Node.js",
    "React",
    "TailwindCSS",
    "Vite",
    "Git",
    "Python",
    "SQL",
    "Machine Learning",
    "Tkinter",
  ];

  return (
    <section
  id="skills"
  className="bg-gradient-to-r from-black to-purple-900 text-white py-16 px-4 text-center"
>
  <h2 className="text-4xl font-bold text-gray-300 mb-8">Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-purple-950 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      >
        <span className="text-lg font-semibold text-gray-300">{skill}</span>
      </div>
    ))}
  </div>
</section>
  );
};

export default Skills;
