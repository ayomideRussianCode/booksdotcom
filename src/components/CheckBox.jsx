function CheckBoxSection({ label, linkText, linkHref, error }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm text-customBlack">
          {label}
          {""}
          <a
            className={`text-sm text-customBlue hover:underline ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-customBlue focus:ring-customBlue"
            }`}
            href={linkHref}
          >
            {linkText}
          </a>
        </span>
      </label>
      {error && (
        <span className="font-font1 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
export default CheckBoxSection;
