import React from 'react';
import { ArrowRight } from 'lucide-react';

const Homecard = ({ home }) => {
  return (
    <div className='w-[300px] max-w-sm shadow-lg hover:animate-scale-up-bl hover:bg-blue-200 p-5 flex flex-col justify-center items-center gap-5'>
      <div className='bg-[url("https://ik.imagekit.io/sri05/Vector.png?updatedAt=1721870243564")] bg-contain bg-no-repeat'>
        <img src={home.image} alt={home.name} className='w-14' />
      </div>
      

      <h1 className='text-xl font-semibold'>{home.name}</h1>
      <p className='text-gray-500'>{home.content}</p>
     
    </div>
  );
};

export default Homecard;
