"use client";

import { decodeJWT } from "@/utils/jwt";

import React from "react";

import { useRouter } from "next/router";

import axios from "axios";

import { useState } from "react";

import Cookies from "js-cookie";

import Login from "../../components/Login/Login";

const fake_NEXT_PUBLIC_JWT_SECRET = "Chonsawat";
const fakeJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVuaXF1ZV9uYW1lIjoiUG9uZHN4Iiwicm9sZSI6IkFkbWluIn19.6QTe_HgZ9etj_3m-UoEY89b4sJj_vC3sF6aAgGQh8Qc";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const setSession = (data) => {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);

    Cookies.set("auth", data, {
      expires: 30,
      sameSite: "Lax",
    });
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: เอาค่าจาก API ไปใส่ใน setCookie
      // const response = await axios.post(
      //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/login`,
      //   formData
      // );

      // const { token } = response.data;
      // const decodedJWT = decodeJWT(token);
      // console.log(decodedJWT);

      // if (decodedJWT && decodedJWT.role) {
      //   if (decodedJWT.role === "Users") {
      //     router.push("/");
      //   } else if (decodedJWT.role === "Admin") {
      //     router.push("/admin");
      //   }
      // }

      // TODO: setCookie
      setSession(fakeJWT);
      const decodedJWT = decodeJWT(fakeJWT);
      console.log(
        decodedJWT,
        decodedJWT.user.role === "Users",
        decodedJWT.user.role === "Admin"
      );
      if (decodedJWT) {
        if (decodedJWT.user.role === "Users") {
          router.push("/");
        } else if (decodedJWT.user.role === "Admin") {
          router.push("/admin");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Login
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      />
    </>
  );
};

export default LoginPage;
