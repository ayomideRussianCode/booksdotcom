function FormField({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  className,
}) {
  return (
    <div className={`mb-4 ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border
           rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue ${
             error
               ? "border-red-500 focus:ring-red-500"
               : "border-customBlue focus:ring-customBlue"
           }`}
      />
      {error && (
        <span className="font-font1 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
export default FormField;
