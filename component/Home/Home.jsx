import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="pt-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-primary">Coffee</span> is a hug in a mug.
            </h1>
            <div className="pt-8">
              <Link
                to="/cafeinfo"
                className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200"
              >
                Fresh Coffee Here !
              </Link>
            </div>
          </div>
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src="https://ik.imagekit.io/sri05/coffee2.png?updatedAt=1720018612916"
              alt="coffeecup"
              className="w-[300px] sm:2-[450px] sm:scale-110 mx-auto spin "
            />
            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              Espresso yourself!
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
              Coffee is love
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
