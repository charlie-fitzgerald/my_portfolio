import React from "react";

const projects = [
  {
    title: "Crop Recommendation Machine Learning Application",
    description:
      "Developed a crop recommendation application with machine learning, using Python, Sklearn, and the Tkinter GUI library",
    projectUrl: "https://github.com/charlie-fitzgerald/Crop_Recommender",
  },
  {
    title: "Pomodoro Timer Application",
    description:
      "Created a Pomodoro timer application using React and Vite, styled with TailwindCSS, that allows users to manage their time effectively.",
    projectUrl: "https://pomodoro-git-standalone-charlie-fitzgeralds-projects.vercel.app/", 
  },
  {
    title: "Weather Application",
    description:
      "A weather application developed using React and the open Weather API",
    projectUrl: "https://github.com/charlie-fitzgerald/WeatherApp", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-black to-purple-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-300 text-center">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-purple-950"
          >
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
            href={project.projectUrl}
            className="text-gray-400 hover:text-gray-200 mt-4 block transition-colors"
            >
            View Project →
          </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
