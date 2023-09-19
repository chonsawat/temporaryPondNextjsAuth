import React from "react";

const FormContainerLogin = ({ children }) => {
  return (
    <>
      <section className="bg-gray-50 font-kanit">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="bg-[url('https://www.swensens1112.com/images/card-head.png')] h-[240px]  bg-top bg-cover flex flex-col justify-center items-start text-white px-[40px]">
              <h2 className="font-5xl">ยินดีต้อนรับ</h2>
              <p>เข้าสู่ระบบเพื่อใช้งาน</p>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormContainerLogin;
