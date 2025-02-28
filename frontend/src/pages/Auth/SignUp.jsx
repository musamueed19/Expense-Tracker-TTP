// react builtin hooks
import React, { useState } from "react";

// useNavigate Hook
import { Link, useNavigate } from "react-router-dom";

// Auth Layout - wrapper component
import AuthLayout from "../../components/layouts/AuthLayout";

// components for login form
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";

// email validator function
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";

const SignUp = () => {
  // state for manage login data,
  // email, password, full Name, profile Pic
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [profilePic, setProfilePic] = useState(null);

  // state for manage error and showing on the page to the client
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs mb-6 mt-[5px] text-slate-700">
          Join us today by entering your details below.
        </p>

        {/* SignUp Form - Section */}
        <form onSubmit={handleSignUp}>
          {/* profile photo selector */}
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          {/* other remiaing fields */}

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
              error === null ? "mb-6" : "mb-4"
            }`}
          >
            <Input
              value={signUpData.fullName}
              onChange={({ target }) =>
                setSignUpData((prev) => ({
                  ...prev,
                  fullName: target.value,
                }))
              }
              label="Full Name"
              placeholder="John Doe"
              type="text"
              name="fullName"
            />
            <Input
              value={signUpData.email}
              onChange={({ target }) =>
                setSignUpData((prev) => ({
                  ...prev,
                  email: target.value,
                }))
              }
              label="Email Address"
              placeholder="john@example.com"
              type="text"
              name="email"
            />
            <div className="md:col-span-2">
              <Input
                value={signUpData.password}
                onChange={({ target }) =>
                  setSignUpData((prev) => ({
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
            SIGN UP
          </Button>

          {/* Now if someone want to create new account - Section */}
          <p className="text-[13px] mt-3 text-slate-800">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );

  // Handle Login Form Submit
  async function handleSignUp(e) {
    e.preventDefault();

    console.log(signUpData);

    // SignUp API Call
  }
};

export default SignUp;
