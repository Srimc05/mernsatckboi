import React from "react";
import Jobdata from "../../API/Jobdata";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Sidebar from "./Sidebar";

{/*const Body = () => {
  return (
    <>
      
      <div>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid md:grid-cols-3 lg:grid-cols-3 ">
           <div className="md:col-span-1 p-5">
             <Sidebar/>
           </div>
           <div className="grid grid-cols-3" >

              {Jobdata.map((e) => {
                return (
                  <>
                    <div className="flex flex-wrap justify-around" key={uuidv4()}>  
                      <Card
                        img={e.img}
                        title={e.title}
                        vname={e.vname}
                        sta={e.sta}
                        time={e.time}
                      />
                    </div>
                  </>
                );
              })}</div>
              
            </div>
          </div>
        </div>
      
    </>
  );
};*/}


const Body = () => {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="sm:col-span-1 w-full md:w-1/4">
              <Sidebar />
            </div>
            <div className="sm:col-span-1 md:col-span-2 w-full md:w-3/4 pt-5 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">Trending Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-t-gray-600">
                {Jobdata.map((e) => (
                  <Card
                    key={uuidv4()}
                    img={e.img}
                    title={e.title}
                    vname={e.vname}
                    sta={e.sta}
                    time={e.time}
                  />
                ))}
              </div>
              <div className="pt-5"><button className="border border-green-500 p-2 hover:bg-green-500 rounded-md">Load More Articles</button></div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
