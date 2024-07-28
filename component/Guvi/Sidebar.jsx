import React from 'react';

const Sidebar = () => {
  const menuItems = [
    "AI & ML",
    "Blockchain",
    "Cloud Computing",
    "Cyber Security",
    "Data Science",
    "DevOps",
    "Digital Marketing",
    "Full Stack Development",
    "Software Automation & Testing",
    "UI/UX Designing"
  ];

  return (
    <div className="w-64 h-[580px] pt-5 mt-5 bg-gray-50">
      <div className="">
        <h2 className="bg-green-700 text-white font-semibold w-64 p-2">Trending Articles</h2>
        <ul className="mt-4 ">
          {menuItems.map((item, index) => (
            <li key={index} className="mt-2">
              <div className=' hover:bg-green-100 p-2'><a href="#" className="flex items-center text-gray-700 ml-2 ">
                {item}
                <span className="ml-auto">&gt;</span>
              </a></div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
