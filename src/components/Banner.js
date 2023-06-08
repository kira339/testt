import React from "react";
export default function Banner({ pageName }) {
  return (
    <div className="w-full h-16 bg-orange-500 flex items-center justify-center">
      <h1 className="text-2xl text-white">{pageName}</h1>
    </div>
  );
}
