import React from "react";


const articles = [
    {
      title: "7 Best Techniques For Character Animation in Motion Graphics",
      date: "11 Jul, 2024",
      readTime: "5 Min Read",
      imageUrl: "https://ik.imagekit.io/sri05/Feature-Image-1.webp?updatedAt=1721052258458",
    },
    {
      title: "Major Differences Between Big Data and Data Science [2024]",
      date: "11 Jul, 2024",
      readTime: "6 Min Read",
      imageUrl: "https://ik.imagekit.io/sri05/Differences-Between-Big-Data-and-Data-Science.webp?updatedAt=1721052160051",
    },
    {
      title: "What is the Data Science Life Cycle?",
      date: "11 Jul, 2024",
      readTime: "4 Min Read",
      imageUrl: "https://ik.imagekit.io/sri05/Data-Science-Life-Cycle.webp?updatedAt=1721061681514",
    },
    {
      title: "Understanding the Data Science Process: A Comprehensive Guide [2024]",
      date: "11 Jul, 2024",
      readTime: "5 Min Read",
      imageUrl: "https://ik.imagekit.io/sri05/Data-Science-Process.webp?updatedAt=1721061710758",
    },
  ];

const Art = () => {
  return (
    <>
    
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 pl-5">Most Recent Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg hover:shadow-2xl">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2 flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <div className="flex justify-between"> <p className="text-gray-600">{article.date}</p>
              <p className="text-gray-600">{article.readTime}</p></div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Art;
