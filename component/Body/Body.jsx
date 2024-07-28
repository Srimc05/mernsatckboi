import { v4 as uuidv4 } from 'uuid';
import Card from '../Card/Card';
import Jobdata from '../../API/Jobdata';

const Body =() =>{
    return(
        <>
        <p>navbar</p>

        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    Jobdata.map((e)=>{
                        return(
                            <> 
                            <div key={uuidv4()}>
                                <Card jobTitle={e.jobTitle} 
                            companyname={e.companyname} 
                            Tag={e.Tag} 
                            joboffer={e.joboffer}
                            startdate={e.startdate}
                            experience={e.experience}
                            />
                                </div>
                            </>
                           
            
                        )
                        
                    })
                }                
              
                

            </div>

        </div>
       
        </>
        
        
    );
};

export default Body;