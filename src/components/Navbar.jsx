const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-netflix">
          Anant<span className="text-white">.</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
