
import { Star } from "lucide-react";

const Card = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md w-80 h-min-[300px] mt-16">
      <div className="flex absolute justify-center -top-[-100px] bg-red-500">
        <img
          className="w-20 h-20 rounded-full border-2 border-white fixed"
          src="https://ik.imagekit.io/sri05/Premium%20Photo%20_%20Fantastic%20orange%20sea%20ocean%20sunset%20cloud%20sky%20photo.jpeg?updatedAt=1711781399662"
          alt="logo"
        />
      </div>
      <div className="p-6 text-center mt-8">
        <h5 className="mb-2 text-xl font-bold ">SRI SUDHAN</h5>
        <p className="text-red-500">Engineer</p>
        <p className="mb-4 text-gray-700">
          Our experienced electricians are highly trained aspects electrical
          and many security to emergency
        </p>
        <div className="flex justify-center mb-4">
          <div className="text-red-500 flex gap-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Card