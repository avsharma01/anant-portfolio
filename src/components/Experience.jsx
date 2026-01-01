const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Experience <span className="text-netflix">.</span>
        </h2>

        <div className="bg-darkcard p-6 rounded-xl">
          <h3 className="text-2xl font-semibold">
            Google Cloud – Generative AI Intern
          </h3>
          <p className="text-gray-400 mb-2">June 2025 – July 2025</p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Worked on LLMs, RAG pipelines, and multimodal AI workflows.</li>
            <li>Built Gemini-powered applications using Vertex AI.</li>
            <li>Applied Responsible AI principles (fairness, bias, safety).</li>
            <li>Hands-on experience with MLOps for Generative AI.</li>
          </ul>

          <a
            href="https://skillwallet.smartinternz.com/certificate/virtual-internship/131632cb7eeb986974e1be59af67e8fe"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-netflix hover:underline"
          >
            View Internship Certificate →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
