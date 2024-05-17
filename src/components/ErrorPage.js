import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-6">Oops!</h2>
        <p className="mb-6">Sorry, an unexpected error has occured.</p>
        <p className="text-gray-400 italic text-center">Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
