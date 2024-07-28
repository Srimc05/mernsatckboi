import React from "react";
import Blogcard from "../Codegalatta/Blogcard";

const courses = [
  {
    image: "https://ik.imagekit.io/sri05/courses-01.webp?updatedAt=1721308487860",
    instructorImage: "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
    instructorName: "Jason Williams",
    category: "Science",
    title: "Data Science and Machine Learning with Python - Hands On!",
    duration: "08 hr 15 mins",
    like: "2900",
  },
  {
    image: "https://ik.imagekit.io/sri05/courses-01.webp?updatedAt=1721308487860",
    instructorImage: "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
    instructorName: "Pamela Foster",
    category: "Science",
    title: "Create Amazing Color Schemes for Your UX Design Projects",
    duration: "08 hr 15 mins",
    like: "2900",
  },
  {
    image: "https://ik.imagekit.io/sri05/courses-01.webp?updatedAt=1721308487860",
    instructorImage: "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
    instructorName: "Rose Simmons",
    category: "Science",
    title: "Culture & Leadership: Strategies for a Successful Business",
    duration: "08 hr 15 mins",
    like: "2900",
  },
];

const Blogbody = () => {
  return (
    <div className="2xl:container">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-5 m-5">
            <h1 className="text-center text-green-600 text-2xl">Latest News</h1>
        <h3 className="text-center text-3xl font-semibold ">Educational Tips & <span className="text-green-600">Tricks</span> </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {courses.map((course, index) => (
            <Blogcard key={index} course={course} />
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Blogbody;
