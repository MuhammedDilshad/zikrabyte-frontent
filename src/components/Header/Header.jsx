import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { TitleContent } from "../Helper";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className=" grid grid-cols-3 justify-items-center text-[#37447E] p-3 ">
      <div className="grid grid-cols-3 justify-between max-md:hidden ">
        {TitleContent.map((Hdata) => (
          <strong key={Hdata.key}>{Hdata.title}</strong>
        ))}
      </div>
      <div>
        <strong>Landing</strong>
      </div>
      <div>
        <button className="bg-[#37447E] text-white p-1 cursor-pointer">
          BuyNow
        </button>
      </div>
      <div className=" relative inline-block text-center lg:hidden max-sm:block md:hidden">
        <div>
          <BiMenu
            onClick={() => setMenu(!menu)}
            className="text-3xl cursor-pointer lg:hidden max-sm:block md:hidden sm:block"
          />
        </div>

        {menu && (
          <div
            className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-blend-overlay	 shadow-lg ring-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1 px-1 bg-white" role="none">
              {TitleContent.map((Hdata) => {
                return (
                  <strong
                    onClick={() => setMenu(!menu)}
                    className="flex "
                    key={Hdata.key}
                  >
                    {Hdata.title}
                  </strong>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
