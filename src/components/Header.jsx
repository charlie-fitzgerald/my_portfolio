import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-gradient fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`menu-btn md:hidden text-2xl text-white focus:outline-none relative z-20`}
          style={{ marginRight: isOpen ? "-12px" : "0" }} // Pull X button closer
        >
          {isOpen ? "✖️" : "☰"}
        </button>

    {/* Mobile Menu */}
    <nav
      className={`${
        isOpen ? "block mobile-menu" : "hidden"
      } md:hidden absolute top-16 right-4 text-white py-4 px-6 w-48 z-10`}
    >
      <a href="#about" className="block hover:text-blue-400">
        About
      </a>
      <a href="#skills" className="block hover:text-blue-400">
        Skills
      </a>
      <a href="#projects" className="block hover:text-blue-400">
        Projects
      </a>
      <a href="#contact" className="block hover:text-blue-400">
        Contact
      </a>
    </nav>

    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-6 text-lg text-gray-300">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </nav>
  </div>
</header>


  );
};

export default Header;
