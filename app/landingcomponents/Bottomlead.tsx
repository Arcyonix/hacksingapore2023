import React from "react";

const BottomLead = ({actionText, description, mainActionText, extraActionText}: any) => {
  return (
    <div className="flex flex-col justify-center h-screen bg-green-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full lg:bg-action">
      <p className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10">{actionText}</p>
      <p className="pl-12 pr-12 text-xl leading-8 text-center text-gray-300 lg:text-gray-200 lg:font-medium">{description}</p>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-48 lg:flex-row lg:pt-1">
        <a href="/login"
          className="pt-3 pb-3 pl-8 pr-8 text-2xl font-semibold text-center text-white transition-all bg-orange-600 shadow-2xl lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none ring-2 ring-orange-600 "
        >
          {mainActionText}
        </a>
      </div>
    </div>
  );
};

export default BottomLead;