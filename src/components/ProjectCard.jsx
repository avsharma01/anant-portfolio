const ProjectCard = ({ title, desc, tech = [], github, live, onVideo }) => {
  return (
    <div className="bg-darkcard p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-black/40 border border-white/10 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-netflix hover:underline"
          >
            GitHub →
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:underline"
          >
            Live Demo →
          </a>
        )}

        {onVideo && (
          <button
            onClick={onVideo}
            className="text-gray-300 hover:underline"
          >
            Watch Video →
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
