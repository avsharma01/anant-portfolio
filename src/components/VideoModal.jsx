const VideoModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-[90%] md:w-[70%] aspect-video bg-black rounded-xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-lg"
        >
          ✕ Close
        </button>

        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/7wsSXbvEUA8"
          title="CropSense Project"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;
