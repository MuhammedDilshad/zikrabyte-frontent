import React from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { TitleContent } from "../Helper";

function Footer() {
  return (
    <div className="bg-[#E7ECFF] max-md:p-5 p-9">
      <div className="grid grid-cols-3 justify-items-center">
        <small className="text-[#B0B8BC]">©2023 Yourcompany</small>
        <strong className="text-[#37447E] cursor-pointer">Landing</strong>
        <button className="bg-[#37447E] text-white p-1 max-sm:p-0 max-sm:text-sm cursor-pointer">
          Purchase now
        </button>
      </div>
      <hr className="border-t border-[#CDD1D4] max-sm:my-2 my-4 max-lg:mx-20 max-md:mx-10 mx-32" />
      <div className="grid grid-cols-2 justify-items-center max-md:gap-10 max-lg:gap-32 gap-96 text-[#B0B8BC]">
        <div className="flex gap-4 max-sm:gap-2 cursor-pointer">
          {TitleContent.map((Fdata) => (
            <small key={Fdata.key}>{Fdata.title}</small>
          ))}
        </div>
        <div className="flex gap-4 max-sm:gap-2 cursor-pointer">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
