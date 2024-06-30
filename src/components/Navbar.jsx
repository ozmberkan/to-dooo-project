import React from "react";

export default function Navbar() {
  return (
    <div className="w-[300px] min-h-[850px] rounded-md p-4 border-2 border-[#141414]/10">
      <div id="title" className="w-full flex justify-start items-center">
        <h1 className="font-poppins font-semibold text-[#141414] text-xl">
          v0.5
        </h1>
      </div>
      <hr className="h-0.5 w-full mt-3 bg-black/5 " />
    </div>
  );
}
