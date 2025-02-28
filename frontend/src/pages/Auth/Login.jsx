// react builtin hooks
import React, { useState } from "react";

// useNavigate Hook
import { Link, useNavigate } from "react-router-dom";

// Auth Layout - wrapper component
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/layouts/Inputs/Input";
import Button from "../../components/Buttons/Button";

// import

const Login = () => {
  // state for manage login data,
  // email, password
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // state for manage error and showing on the page to the client
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex flex-col md:h-full lg:w-[70%] justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs mb-6 mt-[5px] text-slate-700">
          Please enter your details to log in
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className={`space-y-6 ${error === null ? "mb-6" : "mb-4"}`}>
            <Input
              value={loginData.email}
              onChange={({ target }) =>
                setLoginData((prev) => ({
                  ...prev,
                  email: target.value,
                }))
              }
              label="Email Address"
              placeholder="john@example.com"
              type="text"
              name="email"
            />
            <Input
              value={loginData.password}
              onChange={({ target }) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: target.value,
                }))
              }
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
              name="password"
            />
          </div>

          {/* error redering - client side */}
          {error !== null && (
            <p className="text-red-500 text-xs pb-4">{error}</p>
          )}

          {/* CTA - Submit Button */}
          <Button
            onClick={(e) => {
              console.log("Button clicked!");
            }}
            variant={"primary"}
            // className="md:w-2/6"
          >
            LOGIN
          </Button>

          {/* Now if someone want to create new account - Section */}
          <p className="text-[13px] mt-3 text-slate-800">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-primary underline">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );




  // Handle Login Form Submit
  async function handleLogin(e) {
    e.preventDefault();

    console.log(loginData);

    if (!loginData.email) {
      setError("Please enter the email address.");
      return;
    }
    if (!validateEmail(loginData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!loginData.password) {
      setError("Please enter the password.");
      return;
    }
    if (loginData.password.length < 8) {
      setError("Password must be 8 Characters or more.");
      return;
    }

    setError(prev => null)

    // Login API Call
  }
};

export default Login;
