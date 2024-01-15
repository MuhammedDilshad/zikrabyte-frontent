import React, { useState, useEffect } from "react";
import { getBannerData } from "../../Api/BannerRequest";
import newimg from "../../Imags/fone.png";

function Banner() {
  const [banner, setBanner] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await getBannerData();
        setBanner(respose[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative max-lg:-mt-32 max-md:-mt-20 max-sm:-mt-0 -mt-56">
      <div className="  max-lg:ml-60 max-md:ml-24 ml-96">
        <img src={newimg} alt="" />
      </div>
      <div className="top-1/3  max-sm:top-5  absolute max-lg:pl-20 max-sm:pl-5 max-md:pl-10 pl-32 content-center max-sm:w-5/6 max-md:w-4/6 max-lg:w-6/6 w-3/6 text-black">
        <h1 className="font-roboto font-medium text-4xl max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-lg:pb-1 pb-4">
          {banner?.title}
        </h1>
        <p className="font-roboto font-normal text-base max-sm:leading-4 leading-7 max-lg:pb-1 pb-4">
          {banner?.content}
        </p>
        <button className="bg-[#37447E] text-white max-sm:px-0  px-4 py-2 max-sm:mr-1 mr-4">
          Purchase UI Kit
        </button>
        <button className="border border-[#37447E] text-[#37447E] max-sm:px-0 px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Banner;
