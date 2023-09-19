import React from "react";
import { useState } from "react";

import Navbar from "../Header/Navbar";
import SexOptions from "../../features/SexOptions";

const Register = () => {
  const [color, setColor] = useState("");
  const onClickHandler = (event) => {
    setColor(event.target.innerText);
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 font-kanit">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="bg-[url('https://www.swensens1112.com/images/card-head.png')] h-[240px]  bg-top bg-cover flex flex-col justify-center items-start text-white px-[40px]">
              <h2>สร้างบัญชี</h2>
              <p>สมัครสมาชิกและเริ่มใช้งาน</p>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      ชื่อ
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="กรอกชื่อ"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      นามสกุล
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="กรอกนามสกุล"
                      required=""
                    />
                  </div>
                </div>
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
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
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
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>

                <SexOptions color={color} onClickHandler={onClickHandler} />

                <div>
                  <label
                    htmlFor="birthdate"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    ของขวัญวันเกิดรอคุณอยู่
                  </label>
                  <input
                    datepicker
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Select date"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-[#c21c23] rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <span htmlFor="terms" className="font-light text-gray-500">
                      ฉันได้อ่านและยอมรับ{" "}
                      <a
                        className="font-medium text-[#c21c23] hover:underline"
                        href="#"
                      >
                        ข้อกำหนดการใช้งาน
                      </a>
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-[#c21c23] rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <span htmlFor="terms" className="font-light text-gray-500">
                      ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ
                      จากสเวนเซ่นส์และ{" "}
                      <a
                        className="font-medium text-[#c21c23] hover:underline"
                        href="#"
                      >
                        บริษัทในเครือ
                      </a>
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#c21c23] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
