import React from 'react'
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex h-[100vh] justify-center bg-gray-50">
      <div className="self-center">
        <h1 className="sm:text-9xl font-bold text-7xl">
          <span className="text-red-500">4</span>
          <span className="text-yellow-500">0</span>
          <span className="text-green-500">4</span>
        </h1>
        <h2 className="sm:text-2xl text-lg m-5">Oops... Page Not Found</h2>
        <Link
          to={"/"}
          className="bg-blue-700 hover:bg-blue-900 font-bold text-white px-5 py-2 rounded-lg m-5"
        >
          GO TO HOME
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound