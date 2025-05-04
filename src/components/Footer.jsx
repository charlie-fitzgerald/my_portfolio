const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-black to-purple-900 text-white py-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Charles Fitzgerald. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/charles-fitzgerald-2641b295/" className="text-purple-300 hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/charlie-fitzgerald" className="text-purple-300 hover:text-blue-400">GitHub</a>
          <a href="#contact" className="text-purple-300 hover:text-blue-400">Contact</a>
        </div>
      </footer>
    );
  };
  export default Footer;