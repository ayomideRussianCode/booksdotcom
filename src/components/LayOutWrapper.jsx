function LayOutWrapper({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customWhite font-font1">
      <div className="flex w-full max-w-4xl bg-customWhite">{children}</div>
    </div>
  );
}
export default LayOutWrapper;
