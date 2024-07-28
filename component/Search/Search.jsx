import { useState } from "react"

const Search=()=>{

    const dummydata=[{
        name:"sri"
    },
{
    name:"mc"
},
{
    name:"vijay"
},
{
    name:"maverick"
},
{
    name:"samantha"
}]
    const[dat]=useState(dummydata)
    const[fldata,setfldata]=useState(dat)
    return(
        <div>
            <input type="text" placeholder="Enter your name" className="border border-black"
            onChange={(e)=>{
                console.log(e.target.value);

                const onlydata=fldata.filter((e2)=>{
                    return e2.name.includes(e.target.value.toLowerCase());
                })
                setfldata(onlydata);
            }}/>




        </div>


    )
}
export default Search;


