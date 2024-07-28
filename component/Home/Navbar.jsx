import { Coffee } from "lucide-react";
const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  }
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between ">
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive "
            >
              <img
                src="https://ik.imagekit.io/sri05/coffee_logo.png?updatedAt=1720018612503"
                className="w-14"
                alt=""
              />
              Sri Cafe
            </a>
          </div>

         
              <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300"  className="flex"><div className="flex p-5 justify-between items-center">
  <ul className="flex space-x-10 pr-6 text-[ #b35900]">
    <a href="/#" className="inline-block text-xl hover:text-white duration-200">Home</a>
    <a href="/#"className="inline-block text-xl hover:text-white duration-200">Services</a>
    <a href="/#about"className="inline-block text-xl hover:text-white duration-200">About</a>
    
  </ul>
</div>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200  flex items-center inline-block text-xl hover:text-white duration-200 gap-3">
              Order <Coffee className="text-xl cursor-pointer" />
            </button></div>  
            
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
