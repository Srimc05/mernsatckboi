import React from 'react';

const CourseCard = ({ image, title, availableLanguages, features, buttonText }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="absolute top-2 right-2 bg-yellow-300 text-xs font-bold px-2 py-1 rounded">
          MOST POPULAR
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">Available in</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {availableLanguages.map((language, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {language}
            </span>
          ))}
        </div>
        <ul className="mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 text-sm mb-1 flex items-center">
              <span className="mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
        <button className="bg-green-600 w-full text-white px-4 py-2 rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
