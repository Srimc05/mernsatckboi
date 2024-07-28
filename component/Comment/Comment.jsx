import { useState } from "react"

const Comment=()=>{

    const[name,setname]=useState()
    const[mess,setmess]=useState()
    const[data, setdata]=useState({
        name:"",//structure definition is not nesscary ,,can be emoty to {}
        mess:""})

    const[cdata,setcdata]=useState([])

    return(

        <>
        <div className="flex flex-col gap-5">
             <input className="border border-black w-52" type="text" onChange={(e)=>{
                console.log(e.target.value)
                setdata({...data,name:e.target.value})
             }} placeholder="Enter name"/>
        <textarea className="border border-blue-700 w-52" rows={5} cols={5} placeholder="Enter details"
        onChange={(a)=>{
            console.log(a.target.value)
            setdata({...data,mess:a.target.value})
        }}></textarea>
        <button className="border border-red-500 w-52" onClick={()=>{
            console.log("Button Clicked")
            //setcdata([...data,data])
            setcdata((v)=>[...v,data])//only for array


        }}>Submit</button>
        </div>

        <div>
             <p>{data.name}</p>
            <p>{data.mess}</p>
        </div>

        <div className="border border-blue-700 h-10">{
            cdata.map((e)=>{
                return(
                    <>
                    <p>{e.name}</p>
                    <p>{e.mess}</p>
                    
                    
                    </>
                )
            })
            
            }

        </div>
       


        
    
        
        
        </>

    )
        
}

export default Comment;