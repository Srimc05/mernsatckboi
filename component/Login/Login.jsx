import { useState } from "react";

const Login = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(name, age);
    // validate the data
    //api call
  };
  return (
    <>
    <h1>Normal Form</h1> 
      <form onSubmit={onsubmit} >
        <div className="border border-blue-700 m-4 ">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            placeholder="Enter the name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>

        <div className="border border-red-600 m-4">
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            id="age"
            placeholder="Enter the age"
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="bg-green-500 m-4 rounded-md p-1">Submit</button>
      </form>
      <p>{name}</p>
      <p>{age}</p>
    </>
  );
};

export default Login;
