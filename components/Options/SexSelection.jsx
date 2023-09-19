import React from "react";

const SexSelection = ({ color, onClickHandler, innerText }) => {
  return (
    <>
      <div>
        <label
          className={`border border-[#d2d2d2] px-[32px] py-[12px] leading-5 h-auto  rounded-[30px] text-[#e21c23] hover:cursor-pointer ${
            color === innerText ? "bg-red-500 text-white" : ""
          }`}
          onClick={onClickHandler}
        >
          {innerText}
        </label>
      </div>
    </>
  );
};

export default SexSelection;
