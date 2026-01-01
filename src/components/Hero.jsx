const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I’m <span className="text-netflix">Anant Vaibhav</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          AI/ML Engineer crafting intelligent products with clean web interfaces.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="bg-netflix px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
>
            Download Resume
        </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
