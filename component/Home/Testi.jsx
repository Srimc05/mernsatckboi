import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sri",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://ik.imagekit.io/sri05/big-ben-clock-tower-london-sunset-special-photographic-processing.jpg?updatedAt=1711819736958",
  },
  {
    name: "Virat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://ik.imagekit.io/sri05/lon.jpeg?updatedAt=1711819535044",
  },
  {
    name: "Pablo Escobar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://ik.imagekit.io/sri05/taj.jpeg?updatedAt=1711815833602",
  },
];

const TestimonialCard = ({ name, text, img }) => (
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <img
      src={img}
      alt={name}
      className="mx-auto rounded-full mb-4 h-24 w-24"
    />
    <p className="text-gray-700 mb-4">{text}</p>
    <p className="font-bold text-lg">{name}</p>
  </div>
);

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
    <div className="max-w-screen-xl mx-auto py-12">
      <h2 className="text-center text-4xl font-bold mb-8">Testimonials</h2>
      <h3 className="text-center text-2xl mb-8 font-semibold">What our Customers <span className='text-primary'>Say's</span> </h3>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <TestimonialCard
              name={testimonial.name}
              text={testimonial.text}
              img={testimonial.img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
