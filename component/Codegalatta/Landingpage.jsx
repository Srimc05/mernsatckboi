import React from 'react';
import { Lightbulb } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row border border-black bg-blue-50 '>
        <div className='p-6 m-6 lg:p-10 lg:m-12 flex-1 mt-5'>
          <p className='text-lg text-[#553cdf] flex items-center'><Lightbulb className="mr-2" /> Gateway to Lifelong Learning</p>
          <h1 className='text-[56px] lg:text-6xl text-[#221859] font-medium mt-4'>
            Unlocking Your Potential <span className='font-normal'>with Online Learning</span>
          </h1>
          <p className='text-gray-700 text-lg mt-4'>Discover a world of knowledge and opportunities with our online education platform to pursue a new career.</p>
          
          <div className='flex justify-start items-center mt-10  gap-16'>
            <button className='bg-[#553CDF] text-lg py-3 px-4  text-white flex items-center justify-center lg:inline-flex rounded-md border border-[#553CDF] hover:bg-white hover:text-[#553CDF]'>
            View all courses <ArrowRight className='ml-2' />
          </button>
          <div className='flex items-center '>
            <div className='flex -space-x-4 '>
              <img src="https://ik.imagekit.io/sri05/07.png?updatedAt=1722135496966" alt="Student" className='w-12 h-12 rounded-full border-2 border-white' />
              <img src="https://ik.imagekit.io/sri05/07.png?updatedAt=1722135496966" alt="Student" className='w-12 h-12 rounded-full border-2 border-white' />
              <img src="https://ik.imagekit.io/sri05/07.png?updatedAt=1722135496966" alt="Student" className='w-12 h-12 rounded-full border-2 border-white' />
            </div>
            <div className='ml-4'>
              <p className='text-2xl text-[#221859]'>2k students</p>
              <p className='text-lg text-gray-700'>Join our online class</p>
            </div>
          </div>
            
          </div>
        </div>
        <div className='flex-1'>
          <img src="https://ik.imagekit.io/sri05/01.png?updatedAt=1722135234589" alt="Background" className='w-full h-full object-cover' />
        </div>
       
      </div>
    </>
  );
};

export default LandingPage;
