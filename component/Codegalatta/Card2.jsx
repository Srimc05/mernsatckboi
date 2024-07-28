import React from 'react';
import { Search } from 'lucide-react';

const Menus = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Services',
    link: '/#',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Pages',
    link: '/#Pages',
  },
  {
    id: 5,
    name: 'Blog',
    link: '/#Blog',
  },
  {
    id: 6,
    name: 'Contact',
    link: '/#Contact',
  },
];

const Card2 = () => {
  return (
    <>
    <div className='shadow-xl'>  <div className="container mx-auto py-2 px-4 ">
        <div className="flex justify-between items-center flex-wrap ">
          <a
            href="#"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider"
          >
            <img
              src="https://ik.imagekit.io/sri05/logo.png"
              
            />
    
          </a>

          <div className="flex flex-wrap items-center">
            <div className="hidden lg:flex p-5 justify-between items-center">
              <ul className="flex space-x-4 sm:space-x-10 pr-6 text-[ #b35900]">
                {Menus.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.link} className="inline-block text-sm sm:text-xl text-gray-500">
                      {menu.name}
                    </a>
                  </li>
                ))}
                <Search className="text-gray-500" />
              </ul>
            </div>
            <button className="bg-blue-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:scale-105 duration-200 flex items-center text-sm sm:text-xl text-white gap-3">
              Get A Quote
            </button>
          </div>
        </div>
      </div></div>
    
    </>
  );
};

export default Card2;
