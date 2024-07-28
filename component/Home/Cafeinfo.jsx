import React from "react";
import Navbar from "../Navbar/Navbar";
import Foooter from "./Foooter"; // Corrected the import to match typical spelling
import { Coffee } from "lucide-react";

const Cafeinfo = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <img
            src="https://ik.imagekit.io/sri05/coffee-white.png?updatedAt=1720018612643"
            alt="cafe"
            className="w-full md:w-1/2 spin max-w-md mb-6 md:mb-0 rounded-lg"
          />
          <div className="bg-white p-6 rounded-lg max-w-2xl md:ml-8">
            <h1 className="text-2xl font-semibold mb-5 text-primary">
              Cappuccino
            </h1>
            <p className="text-gray-700 mb-4 text-lg">
              A cappuccino is a coffee-based drink made with equal parts of
              espresso, steamed milk, and milk froth. Originating in Italy, the
              cappuccino is named after the Capuchin friars, referencing the
              color of their robes.
            </p>
            <p className="text-gray-700 text-lg">
              A cappuccino is usually made using an espresso machine. The double
              espresso is poured into the bottom of the cup, followed by a
              similar amount of hot milk, which is prepared by heating and
              texturing the milk using the espresso machine's steam wand. The
              top third of the drink consists of milk foam, which can be
              decorated with art made with the same milk, or simply sprinkled
              with cinnamon or cocoa powder.
            </p>
            
            <div className="flex justify-between mt-14 items-center">
              
              <button className="bg-primary px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center text-xl text-white hover:text-amber-100 gap-3">
                Order <Coffee className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Foooter />
    </>
  );
};

export default Cafeinfo;
