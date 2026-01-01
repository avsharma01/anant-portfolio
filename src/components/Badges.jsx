const Badges = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Google Cloud <span className="text-netflix">Badges</span>
        </h2>

        <p className="text-gray-300 mb-6">
          Earned hands-on badges through Google Cloud Skill Boost, covering
          Generative AI, Vertex AI, and cloud-native ML workflows.
        </p>

        <a
          href="https://www.skills.google/public_profiles/d0c64857-7a90-4fd4-a4d2-9b096ad23ee5"
          target="_blank"
          rel="noreferrer"
          className="text-netflix hover:underline"
        >
          View Skill Boost Profile →
        </a>
      </div>
    </section>
  );
};

export default Badges;
