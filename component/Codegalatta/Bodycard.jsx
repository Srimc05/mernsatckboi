// App.js
import React from "react";
import Card from "../Codegalatta/Card";

const courses = [
  {
    image:
      "https://ik.imagekit.io/sri05/courses-01.webp?updatedAt=1721308487860",
    instructorImage: 
      "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
    instructorName: "Jason Williams",
    category: "Science",
    title: "Data Science and Machine Learning with Python - Hands On!",
    duration: "08 hr 15 mins",
    lectures: 29,
    discountPrice: 385.0,
    originalPrice: 440.0,
    rating: 4.9,
  },
  {
    image:
      "https://ik.imagekit.io/sri05/courses-01.webp?updatedAt=1721308487860",
    instructorImage:
      "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
    instructorName: "Pamela Foster",
    category: "Science",
    title: "Create Amazing Color Schemes for Your UX Design Projects",
    duration: "08 hr 15 mins",
    lectures: 29,
    discountPrice: 420.0,
    originalPrice: 0.0,
    rating: 4.9,
  },
  {
    image:
      "https://ik.imagekit.io/sri05/courses-01.webp?updatedAt=1721308487860",
    instructorImage:
      "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
    instructorName: "Rose Simmons",
    category: "Science",
    title: "Culture & Leadership: Strategies for a Successful Business",
    duration: "08 hr 15 mins",
    lectures: 29,
    discountPrice: 295.0,
    originalPrice: 340.0,
    rating: 4.9,
  },
];




const App = () => {
  return (
    <>
    <div className="2xl:container ">
        <div className="w-[90%] mx-auto">
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <Card key={index} course={course} />
      ))}
    </div>
            </div>

        </div>

    </div>
    
    </>
    
  );
};

export default App;
