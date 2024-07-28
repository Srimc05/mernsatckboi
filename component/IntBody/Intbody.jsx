import Intcard from "../Intcard/Intcard";
import Intdata from "../../API/Intdata";
import { v4 as uuidv4 } from "uuid";

const Intbody = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div  className="w-[90%] mx-auto grid grid-cols-1 ">
              <p>OUR CLIENTS REVIEW</p>
            <p>What talking about our biddut services</p>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          
            {Intdata.map((e) => {
              return (
                <>
                  
                    <div key={uuidv4()}>
                      <Intcard
                        name={e.name}
                        designation={e.designation}
                        content={e.content}
                      />
                    </div>
                  
                </>
              );
            })}
          </div>
        </div>
      
    </>
  );
};

export default Intbody;
