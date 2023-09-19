import React from "react";
import SexSelection from "@/components/Options/SexSelection";

const SexOptions = ({ color, onClickHandler }) => {
  return (
    <>
      <label
        for="sex"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        เพศ(ไม่ระบุได้)
      </label>
      <div className="flex gap-4">
        <SexSelection color={color} onClickHandler={onClickHandler} innerText="ชาย"/>
        <SexSelection color={color} onClickHandler={onClickHandler} innerText="หญิง"/>
        <SexSelection color={color} onClickHandler={onClickHandler} innerText="ไม่ระบุ"/>
      </div>
    </>
  );
};

export default SexOptions;
