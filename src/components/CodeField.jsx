import React, { useState } from "react";

function CodeField() {
  const CodeInput = () => {
    const [code, setCode] = useState(new Array(6).fill(""));

    const handleChange = (value, index) => {
      if (!/^\d$/.test(value)) return;
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    };

    return (
      <div className="flex space-x-2">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    );
  };
}
export default CodeField;
