function LayOutWrapper({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customWhite font-font1">
      {children}
    </div>
  );
}
export default LayOutWrapper;
