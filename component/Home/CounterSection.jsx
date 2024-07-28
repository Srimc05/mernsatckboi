import React, { useEffect } from 'react';

const CounterSection = () => {
  useEffect(() => {
    const duration = 4000;
    const counters = [
      { id: 'counter', target: 150 },
      { id: 'cou', target: 3600 },
      { id: 'ounr', target: 108000 },
      { id: 'couer', target: 5616000 },
    ];

    counters.forEach(counter => {
      const element = document.getElementById(counter.id);
      const increment = counter.target / (duration / 100);

      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          current = counter.target;
          clearInterval(interval);
        }
        if (element) {
          element.innerHTML = Math.floor(current);
        }
      }, 100);
    });
  }, []);

  return (
    <section className="bg-[url('https://ik.imagekit.io/sri05/coffee-beans-bg.png?updatedAt=1720018612873')] bg-no-repeat bg-cover flex justify-center items-center text-center gap-6">
      <div className="flex justify-start items-center h-[250px] m-5 space-x-5">
        
        <div className="text-[42px] text-white font-bold mb-4 flex flex-col justify-start items-start">
          <div id="counter"></div>
          <h1 className="text-[#a0522d] font-bold font-sans text-[14px]">
            COFFEE'S SOLD PER HOUR
          </h1>
        </div>
      </div>

      <div className="flex flex-row justify-start items-center h-[100px] m-5 space-x-5">
        

        <div className="text-[42px] text-white font-bold mb-4 flex flex-col justify-start items-start">
          <div id="cou"></div>
          <h1 className="text-[#a0522d] font-bold font-sans text-[14px]">
             COFFEE'S SOLD PER DAY
          </h1>
        </div>
      </div>

      <div className="flex flex-row justify-start items-center h-[100px] m-5 space-x-5">
       

        <div className="text-[42px] text-white font-bold mb-4 flex flex-col justify-start items-start">
          <div id="ounr"></div>
          <h1 className="text-[#a0522d] font-bold font-sans text-[14px]">
          COFFEE'S SOLD PER MONTH
          </h1>
        </div>
      </div>

      <div className="flex flex-row justify-start items-center h-[100px] m-5 space-x-5">
       

        <div className="text-[42px] text-white font-bold mb-4 flex flex-col justify-start items-start">
          <div id="couer"></div>
          <h1 className="text-[#a0522d] font-bold font-sans text-[14px]">
          COFFEE'S SOLD PER YEAR
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
