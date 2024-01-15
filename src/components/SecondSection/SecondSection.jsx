import React from "react";
import second from "../../Imags/second.png";
import Icon from "../../Imags/Icon.png";
import { SecContent } from "../Helper";

function SecondSection() {
  return (
    <div className="grid grid-cols-2  max-md:grid-cols-1 justify-between text-[#6F7CB2]">
      <div className="top-1/2 max-sm:p-2 max-lg:p-10 p-20 content-center order-1 max-md:order-2">
        {SecContent.map((data, index) => (
          <div key={index}>
            <h1 className="font-roboto font-medium text-3xl pb-4 text-black">
              {data.title}
            </h1>
            <p className="font-roboto font-normal text-base leading-7 pb-4">
              {data.content}
            </p>
          </div>
        ))}
        <div className="grid grid-cols-2 justify-between max-lg:pt-0 pt-10 gap-4">
          <div>
            <img src={Icon} alt="" />
            <strong className="text-black">Title Goes Here</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
          <div>
            <img src={Icon} alt="" />
            <strong className="text-black">Title Goes Here</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </div>

      <div className="order-2 max-md:order-1 flex justify-center items-center">
        <img src={second} alt="" />
      </div>
    </div>
  );
}

export default SecondSection;
