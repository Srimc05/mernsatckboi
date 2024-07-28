
import { useForm } from "react-hook-form"
export const Loginpage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        // async request which may result error
        try {
            console.log(data)
          // await fetch()
        } catch (e) {
          // handle your error
        }
      };
    
  return (
    <>
    <h1>hook Form</h1> 
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="border border-blue-700 m-4 ">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            placeholder="Enter the name"
            {...register("name")}
            />

           
        </div>

        <div className="border border-red-600 m-4">
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            id="age"
            placeholder="Enter the age"
            {...register("age")}
            
          />
        </div>

        <button type="submit" className="bg-green-500 m-4 rounded-md p-1">Submit</button>
      </form>
    
    </>
    
  )
}
