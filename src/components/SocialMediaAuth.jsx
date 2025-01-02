function SocialMediaAuth({ platforms }) {
  return (
    <div className="flex space-x-4 justify-center mb-6">
      {platforms.map((platform) => (
        <button
          key={platform.alt}
          className="px-8 py-2 rounded-lg border-customAsh"
        >
          <img src={platform.imgSrc} alt={platform.alt} className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}

export default SocialMediaAuth;
