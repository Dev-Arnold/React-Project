import React from "react";

function Box({text1, text2, icon}) {
  return (
    <div className=" bg-white flex flex-col justify-center items-center gap-2 border-b-6 border-b-blue-700">
      <div className=" h-[60px] w-[60px] rounded-full bg-blue-600 grid px-[5px] place-items-center text-2xl font-bold text-white">{icon}</div>
      <h1>{text1}</h1>
      <p className=" text-[14px] font-light text-center">
        {text2}
      </p>
    </div>
  );
}

export default Box;
