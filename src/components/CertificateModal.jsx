const CertificateModal = ({ open, onClose, title, items }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-darkcard rounded-xl p-6 w-[90%] md:w-[60%] max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-4 text-netflix">
          {title}
        </h3>

        <ul className="space-y-2 text-gray-300">
          {items.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CertificateModal;
