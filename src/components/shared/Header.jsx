import React from "react";
import logo from "../../assets/brand/logo.png";

const Header = () => {
  return (
    <div>
      <img className="w-56 mx-auto" src={logo} alt="" />
      <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
        8111 W. Grand Parkway S.
      </h1>
      <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
        Richmond, TX 77407
      </h1>
      <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
        (832) 770-6380
      </h1>
    </div>
  );
};

export default Header;
