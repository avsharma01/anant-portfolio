const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Let’s <span className="text-netflix">Connect</span>
        </h2>

        <p className="text-gray-300 mb-8">
          I’m open to AI/ML internships, frontend roles, and impactful collaborations.
        </p>

        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href="mailto:anantvaibhavofficial@gmail.com"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/anant-vaibhav-b444632a2"
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/avsharma01"
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
