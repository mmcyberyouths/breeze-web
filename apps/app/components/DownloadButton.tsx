import React from "react";
import { LuDownload } from "react-icons/lu";
import DownloadDialogBox from "@/components/DownloadDialogBox";
const DownloadButton = () => {
  return (
    <DownloadDialogBox>
      <p className="bg-neutral-9 font-semibold  items-center justify-center  text-neutral-1 hidden h-11 w-40 rounded-md  text-center  md:flex ">
        Login
      </p>
      <div className="bg-green-6 flex h-10 w-10 items-center justify-center rounded-md md:hidden">
        Login
      </div>
    </DownloadDialogBox>
  );
};

export default DownloadButton;
