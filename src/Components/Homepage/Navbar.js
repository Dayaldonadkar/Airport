import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-[#02122C] text-white py-10">
      <div className="w-7/12 flex justify-between">
        <h1 className="text-3xl">QuadbTech</h1>

        <div className="flex space-x-5 items-center">
          <div className="rounded-lg">
            <PublicIcon
              fontSize="large"
              className="px-1 hover:bg-slate-500 hover:px-1"
            />
          </div>
          <div className="flex items-center">
            <PersonIcon />
            <h1 className="text-lg">Login</h1>
          </div>
          <DensityMediumIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
