import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/inputs/Input";

import { validateEmail } from "../../utils/helper";

import { ProfilePhotoSelector } from "../../components/inputs/ProfilePhotoSelector";

import axiosInstance from "../../utils/axiosinstance";

import { API_PATHS } from "../../utils/apiPaths";

import { UserContext } from "../../context/UserContext";

export const SignUp = ({
  setCurrentPage,
}) => {

  const [profilePic, setProfilePic] =
    useState(null);

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState(null);

  const navigate = useNavigate();

  const { updateUser } =
    useContext(UserContext);

  // Handle Signup
  const handleSignUp = async (e) => {

    e.preventDefault();

    if (!fullName) {
      setError(
        "Please enter the Full Name"
      );
      return;
    }

    if (!validateEmail(email)) {
      setError(
        "Please enter a valid Email"
      );
      return;
    }

    if (!password) {
      setError(
        "Please enter the password"
      );
      return;
    }

    setError("");

    try {

      // Create FormData
      const formData = new FormData();

      formData.append(
        "name",
        fullName
      );

      formData.append(
        "email",
        email
      );

      formData.append(
        "password",
        password
      );

      // Upload profile image
      if (profilePic) {

        formData.append(
          "profileImage",
          profilePic
        );
      }

      // Register API
      const response =
        await axiosInstance.post(
          API_PATHS.AUTH.REGISTER,
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      const { token } =
        response.data;

      if (token) {

        localStorage.setItem(
          "token",
          token
        );

        updateUser(response.data);

        navigate("/dashboard");
      }

    } catch (error) {

      if (
        error.response &&
        error.response.data.message
      ) {

        setError(
          error.response.data.message
        );

      } else {

        setError(
          "Something went wrong. Please try again"
        );
      }
    }
  };

  return (
    <>
      <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">

        <h3 className="text-lg font-semibold text-black">
          Create an Account
        </h3>

        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your
          details below.
        </p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector
            image={profilePic}
            setImage={setProfilePic}
          />

          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">

            <Input
              type="text"
              value={fullName}
              onChange={({ target }) =>
                setFullName(target.value)
              }
              label="Full Name"
              placeholder="john"
            />

            <Input
              type="text"
              value={email}
              onChange={({ target }) =>
                setEmail(target.value)
              }
              label="Email Address"
              placeholder="john@example.com"
            />

            <Input
              type="password"
              value={password}
              onChange={({ target }) =>
                setPassword(target.value)
              }
              label="Password"
              placeholder="Min 8 Characters"
            />

          </div>

          {error && (
            <p className="text-red-500 text-xs pb-2.5">
              {error}
            </p>
          )}

          <button
            className="btn-primary"
            type="submit"
          >
            SIGNUP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">

            Already an account{" "}

            <button
              className="font-medium text-primary underline cursor-pointer"
              onClick={() => {
                setCurrentPage("login");
              }}
            >
              Login
            </button>

          </p>

        </form>
      </div>
    </>
  );
};