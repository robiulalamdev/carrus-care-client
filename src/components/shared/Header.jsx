/* eslint-disable react/no-unknown-property */
import logo from "../../assets/brand/logo.png";
import { Link } from "react-router-dom";
import { iClose, iF, iI, iMenu } from "../../utils/icons";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#55100C] bg-opacity-75 h-10 w-full">
        <div className="max-w-[1400px] h-full mx-auto flex justify-end items-center gap-8 px-2">
          <h1 className="text-sm text-gray-300">(832) 770-6380</h1>
          <div className="text-white flex justify-end items-center gap-2">
            <Link className="" to="/">
              {iF}
            </Link>
            <Link className="" to="/">
              {iI}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block py-2 px-2 shadow">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <img className="w-48" src={logo} alt="" />
          <div className="flex justify-end items-center gap-4 uppercase font-semibold text-gray-900 leading-[18px] tracking-[0.2px]">
            {/* <Link to="/about">About</Link>
            <Link to="/faqs">Faqs</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/contact">Contact</Link> */}
          </div>
        </div>
      </div>
      <div className="md:hidden px-2 py-2">
        <div className="flex justify-between items-center">
          <img className="w-32" src={logo} alt="" />
          <button onClick={() => setOpen(!open)} className="text-[#55100C]">
            {iMenu}
          </button>
        </div>
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="p-4 max-w-[250px]"
      >
        <div className="relative">
          <img className="w-32" src={logo} alt="" />
          <div className="grid grid-cols-1 gap-4 uppercase text-sm font-semibold text-gray-900 leading-[18px] tracking-[0.2px] mt-8 ml-2">
            <Link to="/about">About</Link>
            <Link to="/faqs">Faqs</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-[#55100C] absolute top-0 right-0"
          >
            {iClose}
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
