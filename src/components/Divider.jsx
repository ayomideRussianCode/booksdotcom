function Divider({ text }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <hr className="w-1/3 border-customAsh" />
      <span className="text-customAsh text-sm">{text}</span>
      <hr className="w-1/3 border-customAsh" />
    </div>
  );
}
export default Divider;
