import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-72  m-4 transform transition duration-200 hover:scale-105">
      <div className="rounded-t-md">{props.img}</div>
      <div className="p-3 space-y-2">
        <p className="font-semibold text-md tracking-normal">{props.title}</p>
        <div className=" text-sm flex gap-1 ">
          <span className="text-gray-400 ">By</span>
          <p className=" text-gray-500">{props.vname}</p>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          {" "}
          <p>{props.sta}</p>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
