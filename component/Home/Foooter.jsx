import React from "react";

const Footerlinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Foooter = () => {
  return (
    <div className="bg-[url(https://ik.imagekit.io/sri05/coffee-footer.jpg?updatedAt=1720018612530)] bg-center bg-no-repeat bg-cover w-[100%] min-h-[400px] text-white">
      <div className="container grid pb-20 pt-5 ">
        <div className="flex flex-col justify-center items-center gap-11 ">
          <a href="#" className="font-medium text-2xl text-primary">
            {" "}
            Sri Cafe
          </a>
          <p className="text-xl">Another day, another cup of coffee.</p>
          <p className="text-xl text-black">
          ADDRESS: <span className="text-white">No 69, Manikandan nagar, Metro star city,
          Kundrathur, Chennai : 600069</span> 
        </p>
        
        <div className="flex gap-5">
            <a href="/#" className="font-medium text-white flex items-center justify-between bg-primary p-2 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-amber-100 hover:bg-primary duration-300">Home</a>
            <a href="/#about" className="font-medium text-white flex items-center justify-between bg-primary p-2 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-amber-100 hover:bg-primary duration-300">About</a>
            <a href="/#contact" className="font-medium text-white flex items-center justify-between bg-primary p-2 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-amber-100 hover:bg-primary duration-300">Contact</a>
            <a href="/#blog" className="font-medium text-white flex items-center justify-between bg-primary p-2 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-amber-100 hover:bg-primary duration-300">Blog</a>
        </div></div>

       
      </div>
    </div>
  );
};

export default Foooter;
