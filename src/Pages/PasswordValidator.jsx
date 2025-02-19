import { useState } from "react";
import validator from "validator";

function PasswordValidator() {
  const [message, setMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Is Strong Password");
    } else {
      setMessage("Weak Password");
    }
  };

  return (
    <div className="bg-green-50 w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="bg-blue-200 rounded-full p-20 flex flex-col items-center justify-center shadow-2xl">
        <h1 className="text-4xl">Password Validator</h1>
        <input
          className="border px-5 py-2 mt-5 mb-5 w-[80%] rounded-4xl"
          type="text"
          onChange={(e) => validate(e.target.value)}
        />
        <p
          className={`font-bold ${
            message.includes("Strong") ? "text-green-800" : "text-red-800"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default PasswordValidator;
