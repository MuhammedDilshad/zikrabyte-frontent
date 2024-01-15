import React from "react";
const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

function Items(datas) {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 justify-items-center">
      <div className=" p-10 max-lg:p-5">
        <img src={`${serverPublic}/${datas.image}`} alt="" />
      </div>
      <div className=" p-20 max-lg:p-5 content-center ">
        <h1 className="font-roboto font-medium text-3xl pb-4 text-black">
          {datas?.productTitle}
        </h1>
        <p className="font-roboto font-normal text-base leading-7 pb-4">
          {datas?.productContent}
        </p>
      </div>
    </div>
  );
}

export default Items;
