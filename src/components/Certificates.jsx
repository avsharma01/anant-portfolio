import { useState } from "react";

const issuerLogos = {
  Google: "/logos/google.svg",
  NVIDIA: "/logos/nvidia.svg",
  Coursera: "/logos/coursera.svg",
  Infosys: "/logos/infosys.svg",
  IBM: "/logos/ibm.svg",
};
const categoryIssuer = {
  "Generative AI & LLMs": "Google",
  "Deep Learning & Transformers": "Google",
  "Responsible AI": "Google",
  "Computer Vision & GPU": "NVIDIA",
  "Core CS & DSA": "Infosys",
};

const certificatesData = {
  "Generative AI & LLMs": [
    "Introduction to Generative AI",
    "Introduction to Large Language Models",
    "Gemini for Application Developers",
    "Develop GenAI Apps with Gemini & Streamlit",
    "Prompt Design in Vertex AI",
    "MLOps for Generative AI",
  ],
  "Deep Learning & Transformers": [
    "Attention Mechanism",
    "Encoder-Decoder Architecture",
    "Transformer Models & BERT",
    "Vector Search & Embeddings",
    "Deep Learning for Developers",
  ],
  "Responsible AI": [
    "Responsible AI: Fairness & Bias",
    "Responsible AI: Interpretability & Transparency",
    "Responsible AI: Privacy & Safety",
  ],
  "Computer Vision & GPU": [
    "CUDA C++ Accelerated Computing (NVIDIA)",
    "Python for Computer Vision with OpenCV",
    "Create Image Captioning Models",
  ],
  "Core CS & DSA": [
    "Data Structures and Algorithms",
    "Object-Oriented Data Structures in C++",
    "Finite Automata Theory",
  ],
};

const Certificates = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Certificates <span className="text-netflix">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.keys(certificatesData).map((category, idx) => (
            <div
            key={idx}
            onClick={() => setActive(category)}
            className="bg-darkcard p-6 rounded-xl cursor-pointer hover:scale-[1.03] transition"
>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={issuerLogos[categoryIssuer[category]]}
                alt={categoryIssuer[category]}
                className="h-5 opacity-70"
                


                />

                
                </div>

  <h3 className="text-xl font-semibold mb-1">{category}</h3>
  <p className="text-gray-400">
    {certificatesData[category].length} certificates
  </p>
</div>

            
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-darkcard p-6 rounded-xl w-[90%] md:w-[60%] max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-netflix">
              {active}
            </h3>

            <ul className="space-y-2 text-gray-300">
              {certificatesData[active].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
