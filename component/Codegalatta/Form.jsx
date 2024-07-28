import React from "react";

const Form = () => {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-7">
           
            <div className="flex flex-col gap-5 w-full lg:w-1/3">
              <div className="flex flex-col justify-center items-center gap-2 shadow-md rounded-lg p-4 hover:shadow-2xl">
                <img
                  src="https://ik.imagekit.io/sri05/contact-2(1).png?updatedAt=1721475943385"
                  alt="t1"
                />
                <h1 className="font-bold">Office Address</h1>
                <p className="text-gray-500 text-center">
                  EduQuest E-learning Agency, Los Angeles NY-123, USA
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 shadow-md rounded-lg p-4 hover:shadow-2xl">
                <img
                  src="https://ik.imagekit.io/sri05/contact-2(1).png?updatedAt=1721475943385"
                  alt="t1"
                />
                <h1 className="font-bold">Office Address</h1>
                <p className="text-gray-500 text-center">
                  EduQuest E-learning Agency, Los Angeles NY-123, USA
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 shadow-md rounded-lg p-4 hover:shadow-2xl">
                <img
                  src="https://ik.imagekit.io/sri05/contact-2(1).png?updatedAt=1721475943385"
                  alt="t1"
                />
                <h1 className="font-bold">Office Address</h1>
                <p className="text-gray-500 text-center">
                  EduQuest E-learning Agency, Los Angeles NY-123, USA
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5 shadow-md p-6 w-full lg:w-2/3">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Feel free to get in touch
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold">Contact Me</h2>
              <div className="flex flex-col md:flex-row gap-10 p-6">
                <div className="flex flex-col gap-10 w-full md:w-1/2">
                  <div >
                    
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="border border-gray-300 border-2  outline-none w-[300px] h-12 px-2 rounded-lg bg-gray-100"
                    />
                  </div>
                  <div>
                  
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="border border-gray-300 border-2  outline-none w-[300px] h-12 px-2 rounded-lg bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-10 w-full md:w-1/2">
                  <div>
                   
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                     className="border border-gray-300 border-2  outline-none w-[300px] h-12 px-2 rounded-lg bg-gray-100"
                    />
                  </div>
                  <div>
                 
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      className="border border-gray-300 border-2  outline-none w-[300px] h-12 px-2 rounded-lg bg-gray-100"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
               
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="border border-gray-300 border-2 outline-none  w-[300px] h-24 rounded-lg bg-gray-100 px-2 py-1 "
                ></textarea>
              </div>
              <div className="p-6">
                <button className="px-4 py-2 text-green-600 flex items-center justify-between bg-[#E7F8EE] p-3 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-green-500 duration-300">
                  Send Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
