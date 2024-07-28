
const Filter = () => {
  return (
    <div>
        <>
        <form action=""> 
         <label htmlFor="name">Name : </label>  
        <input type="text" id="name" placeholder="Enter your name : " />

        <label htmlFor="name">Name : </label>
        <input type="text" id="name" placeholder="Enter your name : " />

        <button type="submit" onClick={(e)=>{
            console.log("hi");
            const onlydata=data.filter((e)=>{
                return e.name.toLowerCase()==="ram"
            });
            
        }}> Submit </button>

        
</form>
</>
      

    </div>
  )
}

export default Filter