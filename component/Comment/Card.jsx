import PropTypes from 'prop-types';

import { Banknote , Calendar , UsersRound, Share2 } from 'lucide-react';


const Card =(props)=>{
    return(
        <>
        <div className="shadow-lg  p-5 rounded-3xl border border-gray-500 ">
            <div className=' flex justify-between'>
                <div className='flex gap-2 items-center'>
           
           
            <img className="h-10" src="https://ik.imagekit.io/sri05/apel_aja.jpg?updatedAt=1710695112080" alt="logo" />
             <div className='flex flex-col'>
                
            <p className='text-black font-semibold font-["Poppins"] text-lg'>{props.jobTitle}</p>
            <p className='font-normal text-gray-400 font-["Poppins"] text-base'>{props.companyname}</p>
            </div>
            </div>
           
            <div><Share2 /></div>

            </div>
            
            
        <div className='fjustify-start lex flex-row gap-4 py-4'> 
            <span className='bg-[#f7f8fa] px-4 py-1 rounded-md font-["Poppins"] text-[#76828e]'> {props.Tag}</span>
            <span className='bg-[#f7f8fa] px-4 py-1 rounded-md font-["Poppins"] text-[#76828e]'> {props.Tag}</span>
            <span className='bg-[#f7f8fa] px-4 py-1 rounded-md font-["Poppins"] text-[#76828e]'> {props.Tag}</span>
            <span className='bg-[#f7f8fa] px-4 py-1 rounded-md font-["Poppins"] text-[#76828e]'> {props.Tag}</span>
 </div> 
           
            <div className='grid grid-cols-3 py-2'>
                
                    <div className='flex flex-col justify-start items-start  font-["Poppins"] border border-gray-500 border-l-0 border-y-0  '>
                        <p className='flex justify-start items-center gap-1'><Banknote />Job offers :</p> 
                        <p>{props.joboffer}</p></div>
                 <div className='flex flex-col  justify-start items-start font-["Poppins"] border border-gray-500 border-l-0 border-y-0'> 
                    <p className='flex justify-start items-center gap-1 '><Calendar /> Start date : <br />
                    {props.startdate} </p>
                 </div>

                 <div className='flex flex-col justify-start items-start font-["Poppins"]'>
                    <p className='flex justify-start items-center gap-1'> <UsersRound /> Experience : </p>
                   <p>{props.experience}</p>
                </div>

           
            
            </div>            

        </div>
        <div className='flex justify-end py-2 '> 
         <div className="px-2"> 
            <button className='bg-[#f7f8fa] py-2 px-4 text-[#76828e] font-["Poppins"] rounded-lg'>View Details</button>
        </div>
        
        <div className=''>
            <button className='bg-[#142683] py-2 px-4 text-white font-["Poppins"] rounded-lg'>Apply Now</button>

        </div>


        </div>

      
        
        
        </>
    );

};
export default Card;