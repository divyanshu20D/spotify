import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-[25%] bg-neutral-900 p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="h-[15%] rounded bg-neutral-800 flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p onClick={() => navigate("/")} className="font-semibold">
            Home
          </p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-semibold">Search</p>
        </div>
      </div>
      <div className="bg-neutral-800 h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="bg-neutral-900 p-4 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist.</h1>
          <p className="font-light">It's easy we will help you.</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create playlist
          </button>
        </div>
        <div className="bg-neutral-900 p-4 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let's find some podcast to follow</h1>
          <p className="font-light">We will keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
