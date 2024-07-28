import { v4 as uuidv4 } from "uuid";
import Servicesdata from "./Coffee";

const Coffecard = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 ">
          <h1 className="text-4xl font-bold ">Our Best Blends</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
          {Servicesdata.map((e) => {
            return (
              <>
                <div 
                  data-aos="fade-up"
                  data-aos-delay={e.aosdelay}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[122px]">
                    <img
                      src="https://ik.imagekit.io/sri05/coffee2.png?updatedAt=1720018612916"
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center ">
                    <div className="w-full"></div>
                    <h1 className="text-xl font-bold">{e.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {e.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Coffecard;
