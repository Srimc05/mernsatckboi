import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    story:
      "Paradigms React is a JavaScript library for building user interfaces (UIs). It was developed by Facebook and is now maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    teacher: "Hosain Al-Amin",
    work: "DEVELOPER",
    image:
      "https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595",
  },
  {
    story:
      "Paradigms React is a JavaScript library for building user interfaces (UIs). It was developed by Facebook and is now maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    teacher: "M.Kamrul Islam",
    work: "DEVELOPER",
    image:"https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595"

  },

  {
    story:
      "Paradigms React is a JavaScript library for building user interfaces (UIs). It was developed by Facebook and is now maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    teacher: "Alberta Infantino",
    work: "DEVELOPER",
    image:"https://ik.imagekit.io/sri05/author-05.webp?updatedAt=1721310707595"
      
  },
];

const TestimonialCard = ({ story, work, teacher, image }) => {
  return (
    <div className="flex flex-col justify-center items-center  w-80">
      {" "}
      <div className=" w-80 h-[100%] flex flex-col justify-center items-center  bg-gray-800 text-white rounded-lg p-6 m-14 ">
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <p className="text-orange-500 text-2xl mb-4 "><Quote /></p>
            <p className="text-[16px] mb-4">{story}</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <span className="text-yellow-500 text-xl">★★★★★</span>
            </div>
            <p className="text-center font-semibold">{teacher}</p>
            <p className="text-center text-orange-500 text-sm">{work}</p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center w-80 border border-t-orange-500  border-r-transparent border-l-transparent border-b-transparent">
  <hr className="text-green-500" />
  <img
    src={image}
    alt={teacher}
    className="absolu top-0 transform -translate-y-1/2 w-20 h-20 rounded-full border-4 border-gray-800"
  />
</div>

    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>  <div className="max-w-screen-xl mx-auto p-12 bg-[url('https://ik.imagekit.io/sri05/Background.png?updatedAt=1721872453225')] ">
      <div className="flex flex-col justify-center items-center gap-4 ">

        <div className="bg-[#161A2B] border border-gray-500 w-contain  rounded-2xl flex flex-col justify-center items-start">
          {/*<img src="https://ik.imagekit.io/sri05/Rectangle%204.png?updatedAt=1722015408977" alt="" className="left-10  w-10  transform -translate-x-1/4 "/>*/}
          <h2 className=" text-[16px] font-bold  p-2 text-orange-600 ">  Testimonials
      </h2>
        </div>
        
      <h3 className="text-center text-white text-[42px] font-semibold mb-8">
    

  
          
      
      
        What Our Customers <span className="text-orange-600">Says</span>
      </h3>
      </div>
      
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <TestimonialCard
              story={testimonial.story}
              teacher={testimonial.teacher}
              work={testimonial.work}
              image={testimonial.image}
            />
          </div>
        ))}
      </Slider>
    </div></>

 
  );
};

export default Testimonials;
