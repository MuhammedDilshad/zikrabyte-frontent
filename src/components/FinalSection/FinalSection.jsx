import React from "react";
import { FinalSectionContent } from "../Helper";

function FinalSection() {
  return (
    <div className="text-[#091133]  text-center max-lg:p-20 max-md:p-10 max-sm:p-3 p-32">
      {FinalSectionContent.map((value, index) => (
        <div key={index} className=" content-center">
          <h1 className="font-roboto font-medium text-2xl  mb-8">
            {value.title}
          </h1>
          <p className="font-roboto font-normal text-base text-center max-md:px-10 max-sm:px-3 max-lg:px-32 px-60 max-md:mb-4 mb-8">
            {value.content}
          </p>
          <h1 className="font-roboto font-medium text-4xl tracking-tighter">
            {value.amount}
          </h1>
          <p className="font-roboto font-normal text-base max-md:mb-4 mb-8">
            {value.kitname}
          </p>
          <p className="font-roboto font-normal text-sm mb-4">
            {value.kitpara}
          </p>

          <button className="bg-[#37447E] text-white p-1 cursor-pointer">
            Purchase now
          </button>
        </div>
      ))}
    </div>
  );
}

export default FinalSection;
