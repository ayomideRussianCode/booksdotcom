function FormField({ type, id, placeholder }) {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
      />
    </div>
  );
}
export default FormField;
