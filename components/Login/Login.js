import FormContainerLogin from "@/components/Forms/FormContainerLogin";

import React from "react";

import Navbar from "../Header/Navbar";

const Login = ({ handleSubmit, formData, handleChange }) => {
  return (
    <>
      <Navbar />
      <FormContainerLogin>
        <form className="space-y-4 md:space-y-6 font-kanit " onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded w-full mb-3"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border rounded w-full mb-3"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded w-full mt-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </FormContainerLogin>
    </>
  );
};

export default Login;
