import React, { useState } from "react";

// import icons
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({
  value,
  onChange = null,
  type = "text",
  placeholder,
  label,
  name = "",
  required = true,
}) => {
  // state for handling Hide/Show Password toogling
  const [showPassword, setShowPassword] = useState(false);

  function toogleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    // whole input field
    <div>
      {/* label field */}
      <label htmlFor={name} className="text-[13px] text-slate-800 font-medium">
        {label}
        <span
          className={`${
            required ? "" : "hidden"
          } text-red-500 font-medium ml-0.5 text-base`}
        >
          *
        </span>
      </label>

      {/* input box */}
      <div className="input-box">
        <input
          className="w-full bg-transparent outline-none"
          name={name}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />

        {/* icons for password */}
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toogleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toogleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
