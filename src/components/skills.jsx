const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Skills <span className="text-netflix">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div className="bg-darkcard p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">AI / ML</h3>
            <p>Python, TensorFlow, PyTorch, Vision Transformers, CNNs</p>
          </div>

          <div className="bg-darkcard p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Generative AI</h3>
            <p>LLMs, Gemini, Vertex AI, RAG, Prompt Engineering</p>
          </div>

          <div className="bg-darkcard p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Web & Dev</h3>
            <p>React, Tailwind CSS, JavaScript, Vite, Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
