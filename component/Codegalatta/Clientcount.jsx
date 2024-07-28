import React, { useEffect } from "react";

const Counter = ({ id, target, duration }) => {
  useEffect(() => {
    const element = document.getElementById(id);
    const increment = target / (duration / 100);
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      element.innerHTML = Math.floor(current);
    }, 100);
    return () => clearInterval(interval);
  }, [id, target, duration]);

  return <div id={id}></div>;
};

const Counters = () => {
  const duration = 4000;
  const counters = [
    {
      id: "counter1",
      target: 1790,
      text: "OUR HAPPY STUDENTS",
      imgSrc:
        "https://ik.imagekit.io/sri05/achive-1.png?updatedAt=1721409596687",
    },
    {
      id: "counter2",
      target: 491,
      text: "ENROLLED STUDENTS",
      imgSrc:
        "https://ik.imagekit.io/sri05/achive-2.png?updatedAt=1721409596716",
    },
    {
      id: "counter3",
      target: 245,
      text: "EXPERT INSTRUCTORS",
      imgSrc:
        "https://ik.imagekit.io/sri05/achive-3.png?updatedAt=1721409596711",
    },
    {
      id: "counter4",
      target: 1095,
      text: "SATISFICATION RATE",
      imgSrc:
        "https://ik.imagekit.io/sri05/achive-4.png?updatedAt=1721409596691",
    },
  ];

  return (
    <section className=" p-6">
        <h1 className="text-center font-bold text-2xl p-8">Trusted by the World's best <span className="text-red-600">Companies Achievements</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center text-center">
        {counters.map((counter, index) => (
          <div key={index} className="flex justify-around p-3 shadow-lg rounded-lg bg-white">
            <img src={counter.imgSrc} alt="logos" className="h-20 w-20 mb-4 rounded-full object-cover" />
            <div className="text-4xl text-black flex flex-col justify-center items-start font-bold mb-2">
              <Counter id={counter.id} target={counter.target} duration={duration} />
              <h1 className="text-gray-700 font-bold text-sm">{counter.text}</h1>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counters;
