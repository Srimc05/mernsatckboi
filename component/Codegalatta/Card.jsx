import React from "react";
import PropTypes from "prop-types";
import { Clock3 } from 'lucide-react';
import { BookOpen } from 'lucide-react';


const Card = ({course}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden  p-6 border border-2 border-[#E7F8EE] hover:border-green-600 ">
      <img
        src={course.image}
        alt="course1"
        className="w-full h-40 object-cover"
      />
      <div className="py-4 space-y-4">
        <div className="flex justify-between items-center">
          
          
          <div className="flex items-center"><img
            src={course.instructorImage}
            alt="teacher"
            className="w-12 h-12 rounded-full mr-4"
          />
            <p className="text-gray-700 font-bold">{course.instructorName}</p>
           
          </div> <p className="bg-[#E7F8EE] text-green-600 p-2 rounded-lg">{course.category}</p>
        </div>
        <h3 className="text-lg hover:text-green-600">{course.title}</h3>
        <div className="flex justify-between " >
          <p className="flex gap-2">
          <Clock3/>{course.duration}
          </p>
          <p className="flex gap-2">
          <BookOpen/>{course.lectures} Lectures
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between bg-[#E7F8EE] p-3 rounded-md">
          <div className="text-green-500 font-bold text-xl">
            ${course.discountPrice}
          </div>
           <div className="">
          <span className="text-yellow-500">
            {Array(Math.floor(course.rating)).fill("★").join("")}
          </span>
          <span className="text-gray-400">
            {Array(5 - Math.floor(course.rating))
              .fill("★")
              .join("")}
          </span>
          <span className="ml-2 text-gray-600">{course.rating}</span>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;




