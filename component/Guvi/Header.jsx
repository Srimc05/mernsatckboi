import React from "react";

const Header = () => {
  return (
    <div className="shadow-xl">
      <div className="container mx-auto p-5">
        <div className=" grid grid-cols-1">
          <div className="flex pl-20 justify-between items-center gap-11">
            <div className="flex justify-center items-center gap-7">
              {" "}
              <div className="flex justify-start items-center gap-3">
                <div>
                  <img
                    src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg"
                    alt="g1"
                  />
                </div>
                <div className="text-[#bdbcbb]">|</div>
                <div>
                  <p className="text-xl font-medium">Blog</p>
                </div>
              </div>
              <div className="flex border-2 rounded-sm border-gray-300  h-12 w-[350px] flex justify-between">
                <input
                  type="text"
                  placeholder="What do you want to"
                  className="pl-3"

                />
                <button >
                  <img
                    src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/search.svg"
                    alt="1" className="pr-3"
                  />
                </button>
              </div>
            </div>
            <div className=" ">
              <button className="bg-green-600 shadow-xl text-white pl-4 pr-4 pt-3 pb-3 w-36 font-semibold text-sm rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
