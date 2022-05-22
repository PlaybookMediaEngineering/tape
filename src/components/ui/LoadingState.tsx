import React from "react";
import { LoaderIcon } from "react-hot-toast";

export const LoadingState = () => {
  return (
    <div className="border-0">
      <div className="grid p-5 space-y-2 justify-items-center">
        <LoaderIcon />
      </div>
    </div>
  );
};
