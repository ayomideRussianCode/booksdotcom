function Title({ text, className = "" }) {
  return (
    <h2
      className={`text-2xl pb-2 font-bold text-center text-customBlack ${className}`}
    >
      {text}
    </h2>
  );
}
export default Title;
