import React, { useState } from "react";

function CodeField({ onVerify, onResend, disabled }) {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    const finalCode = code.join("");
    if (finalCode.length === 6) {
      onVerify?.(finalCode);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2 mb-6">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 border border-customBlue rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
          />
        ))}
      </div>

      <p className="text-customAsh text-sm mb-4">
        Didn't receive the email?{" "}
        <button onClick={onResend} className="text-customBlue hover:underline">
          Click to resend
        </button>
      </p>
      <button
        onClick={handleVerify}
        disabled={disabled}
        className="w-full bg-customBlue text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
      >
        Verify
      </button>
    </div>
  );
}

export default CodeField;
