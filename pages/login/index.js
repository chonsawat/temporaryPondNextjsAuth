"use client";

import { decodeJWT } from "@/utils/jwt";

import React from "react";

import { useRouter } from 'next/router';

import axios from "axios";

import { useState } from "react";

import Login from "../../components/Login/Login";



const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/login`, formData);
      
      
      const { token } = response.data;
      const decodedJWT = decodeJWT(token);
      console.log(decodedJWT);

      if (decodedJWT && decodedJWT.role) {
        if (decodedJWT.role === "Users") {
          router.push('/');
        } else if (decodedJWT.role === "Admin") {
          router.push('/admin');
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
