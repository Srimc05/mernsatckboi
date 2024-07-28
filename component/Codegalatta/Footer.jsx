import React from "react";
import { Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className="2xl:container mx-auto p-5 ">
      <div className="bg-[url('https://ik.imagekit.io/sri05/hjhj.png?updatedAt=1722090193784')] bg-no-repeat rounded-t-2xl bg-cover bg-botto">
 <div className="bg-orange-500 rounded-t-2xl flex flex-col md:flex-row justify-between items-center p-5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <img
            src="https://ik.imagekit.io/sri05/address1.png?updatedAt=1721672013269"
            alt="chat-icon"
            className="border border-white rounded-full p-2 border-dashed"
          />
          <h1 className="text-[28px] font-semibold text-white text-center md:text-left">
            Elevating Customer Experience.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 md:mt-0">
          <img
            src="https://ik.imagekit.io/sri05/address1.png?updatedAt=1721672013269"
            alt="phone-icon"
            className="border border-white rounded-full p-2 border-dashed"
          />
          <p className="text-[22px] font-semibold bg-indigo-950 text-white p-2 rounded-2xl text-center">
            91760 30110
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
      <div></div>
        <div className="flex flex-col items-start space-y-7">
          
          <img src="https://ik.imagekit.io/sri05/footer-logo.png?updatedAt=1721673021550" alt="logo" />
          <p className="text-center text-gray-400 lg:text-left text-[16px]">
            Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
          </p>
          <div className="flex space-x-5">
            <button><Linkedin /></button>
            <button><Twitter /></button>
            <button><Facebook /></button>
            <button><Instagram /></button>
          </div>
        </div>
        <div className="flex flex-col items-start  space-y-4 ">
          <h1 className="font-medium text-[20px]   text-white">Useful Links</h1>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">About</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Team</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Latest Blog</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Contact Us</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Testimonials</button>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h1 className="font-medium text-[22px] text-white">Services</h1>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">About</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Team</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Latest Blog</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Contact Us</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Testimonials</button>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h1 className="font-semibold text-[22px] text-white">Newsletter</h1>
          <p className="text-gray-400 text-[16px]">
            Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
          </p>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input type="text" name="email" id="e1" placeholder="Enter your E-mail" className="p-2 outline-none" />
            <button className="p-2 bg-orange-500 text-white"><Send /></button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-5 md:space-y-0 ">
        <p className="text-center md:text-left flex gap-2 text-gray-400 text-[16px]"><Copyright/> 2024 Solutek</p>
        <div className="flex gap-10">
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Privacy Policy</button>
          <button className="text-gray-400 text-[16px] hover:text-orange-500">Supports</button>
        </div>
        
      </div>
      </div>
      
     
    </div>
  );
};

export default Footer;
