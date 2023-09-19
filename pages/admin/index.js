"use client";

import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { decodeJWT } from "@/utils/jwt";

const AdminPage = () => {
  const router = useRouter();
  useEffect(() => {
    const getCookie = async () => {
      const cookie = await Cookies.get("auth");
      return cookie;
    };

    getCookie().then((cookie) => {
      if (cookie) {
        const session = decodeJWT(cookie);
        console.log("session", session);

        if (session.user.role !== "Admin") {
          router.replace("/");
        }
      } else {
        router.replace("/login");
      }
    });
  }, []);

  return <>AdminPage</>;
};

export default AdminPage;
