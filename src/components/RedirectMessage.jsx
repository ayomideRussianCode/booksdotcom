function RedirectMessage({ message, linkText, linkHref }) {
  return (
    <p className="text-sm text-center text-customBlack mt-6">
      {message} {""}
      <a className="text-customBlue hover:underline" href={linkHref}>
        {linkText}
      </a>
    </p>
  );
}
export default RedirectMessage;
