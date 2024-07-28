import React from "react";

const CourseSection = () => {
  return (
    <div className="p-14 bg-gradient-to-r from-black via-green-800 to-black 2xl:container m-14">
      <div className="w-[90%] mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          
          <div className="bg-[url('https://ik.imagekit.io/sri05/guvi-courses-women.webp?updatedAt=1721063578287')] h-56 w-[490px] bg-no-repeat bg-cover p-5 shadow-lg flex flex-col items-start gap-4 rounded-xl">
            <p className="font-bold text-xl">
              Looking for Self-paced Courses with Certifications?
            </p>
            <p className="text-lg text-gray-700">
              Learn in-demand skills & earn <br /> valuable certifications.
            </p>
            <button className="bg-green-600 p-2 rounded-md text-white">
              Explore Course
            </button>
          </div>

          <div className="bg-[url('https://ik.imagekit.io/sri05/zen-courses-men.webp?updatedAt=1721063578247')] h-56 w-[490px] bg-no-repeat bg-cover p-5 shadow-lg flex flex-col items-start gap-4 rounded-xl">
            <p className="font-bold text-xl">
              Looking for Career Programs with Placement Assistance?
            </p>
            <p className="text-lg text-gray-700">
              Upskill & get Job-ready with <br /> placement guidance
            </p>
            <button className="bg-green-600 p-2 rounded-md text-white">
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
