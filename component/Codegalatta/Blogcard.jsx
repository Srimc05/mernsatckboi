import React from 'react';
import PropTypes from "prop-types";
import { Clock3 } from 'lucide-react';
import { Heart } from 'lucide-react';
const Blogcard = ({ course }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden p-6 border-2 border-[#E7F8EE] hover:border-green-600">
      <img
        src={course.image}
        alt="course"
        className="w-full h-40 object-cover"
      />
      <div className="py-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={course.instructorImage}
              alt="teacher"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-gray-700 font-bold">{course.instructorName}</p>
          </div>
          <p className="bg-[#E7F8EE] text-green-600 p-2 rounded-lg">{course.category}</p>
        </div>
        <h3 className="text-lg hover:text-green-600">{course.title}</h3>
        <div className="flex justify-between">
          <p className="flex gap-2">
            <Clock3 />{course.duration}
          </p>
          <p className="flex gap-2">
          <Heart /> {course.like}+
          </p>
        </div>
        <button className="mt-4 w-28 text-green-600 flex items-center justify-between bg-[#E7F8EE] p-3 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-green-500 duration-300">Read More </button> 
         
       
      </div>
    </div>
  );
};

Blogcard.propTypes = {
  course: PropTypes.shape({
    image: PropTypes.string.isRequired,
    instructorImage: PropTypes.string.isRequired,
    instructorName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    like: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blogcard;
