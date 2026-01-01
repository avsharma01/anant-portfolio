import { useState } from "react";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Featured <span className="text-netflix">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="CrickVision"
            desc="AI-powered cricket shot classification using deep learning and video analysis."
            tech={["TensorFlow", "CNN-RNN", "Streamlit", "Docker"]}
            github="https://github.com/avsharma01/video-analysis-for-cricket"
            live="https://crickvision-docker.onrender.com/"
          />

          <ProjectCard
            title="CropSense"
            desc="ML-based crop recommendation system using soil nutrients and environmental data."
            tech={["Machine Learning", "Python", "Web App", "Render"]}
            github="https://github.com/avsharma01"
            live="https://cropsense.onrender.com"   // 🔥 ADD LIVE LINK
            onVideo={() => setOpen(true)}
            />


          <ProjectCard
            title="Brain Tumor Detection (ViT)"
            desc="Vision Transformer-based MRI brain tumor classification system."
            tech={["PyTorch", "Vision Transformer", "Medical Imaging"]}
            github="https://github.com/avsharma01"
            live="https://huggingface.co/spaces/AnantVaibhav01/vit-brain-tumor-detection"
          />
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Projects;
