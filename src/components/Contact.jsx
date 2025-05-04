import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-6">Have a project in mind? Let's collaborate!</p>
      <a
        href="mailto:charles.fitzg@gmail.com"
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition duration-300"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;
