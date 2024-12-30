function CheckBox({ label, linkText, linkHref }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm text-customBlack">
          {label}
          {""}
          <a
            className="text-sm text-customBlue hover:underline"
            href={linkHref}
          >
            {linkText}
          </a>
        </span>
      </label>
    </div>
  );
}
