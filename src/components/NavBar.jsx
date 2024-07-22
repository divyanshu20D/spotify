import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore premium
          </p>
          <p className="px-3 py-1 bg-black text-white rounded-2xl text-[15px] cursor-pointer ">
            Install App
          </p>
          <p className="bg-purple-400 rounded-full text-black flex items-center justify-center w-7 h-7">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black rounded-2xl px-4 py-1 ">All</p>
        <p className="bg-black rounded-2xl px-4 py-1 ">Musics</p>
        <p className="bg-black rounded-2xl px-4 py-1 ">Podcasts</p>
      </div>
    </>
  );
};

export default NavBar;
