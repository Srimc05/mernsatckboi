

const Banner = () => {
  return (
    <div className="bg-[url('https://ik.imagekit.io/sri05/coffee-texture.jpg?updatedAt=1720018612484')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center ">

        <div >
            <div >
                <div className="flex ">
                <div className="w-[630px]">
                    <img src="https://ik.imagekit.io/sri05/coffee-white.png?updatedAt=1720018612643" alt="" className="max-w-[630px] w-full mx-auto spin drop-shadow-xl   " />

                </div>



                <div className=" flex flex-col justify-center items-start  gap-6 sm:pt-0">
                    <h1 className="text-3xl font-semibold">Our Coffee Selection</h1>
                    <p className=" text-\ text-gray-500 tracking-wide leading-5">Discover a world of flavors with our handpicked coffee beans, sourced from the finest farms globally.   <br/>    Whether you prefer a robust espresso or a smooth cold brew, we have something to satisfy every coffee lover.
                    </p>
                    <h1 className="font-semibold text-2xl">Our Commitment to Quality</h1>
                    <button className="font-semibold text-white flex items-center justify-between bg-primary p-3 rounded-md transition ease-in-out delay-150 bg-[] hover:-translate-y-1 hover:scale-110 hover:text-amber-100 hover:bg-primary duration-300">Join Our Coffee Community</button>


                </div>
                
             </div>
                

            </div>
        </div>
    </div>
  )
}

export default Banner