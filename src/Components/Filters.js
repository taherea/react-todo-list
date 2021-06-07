import React from "react";

const Filters = ({ currentFilter, changeFilter}) => (
    <div>
    <button
      class={`bg-white text-sm inline-block border-l border-t border-r border-b py-2 px-6 font-semibold rounded-tl-md rounded-bl-md
       ${currentFilter === "MONTH"  ? 'text-blue-400' : 'text-gray-400'}`} 
       onClick={() => changeFilter("MONTH", new Date().toLocaleDateString("en-US", { month: 'long' })
       +" " + new Date().toLocaleDateString("en-US", { year: 'numeric' }) )} //year and month as second arg
    >
      Month
    </button>
    <button
      class={`bg-white text-sm inline-block border-t border-r border-b py-2 px-7 font-semibold
      ${currentFilter === "WEEK"  ? 'text-blue-400' : 'text-gray-400'}`} 
      onClick={() => changeFilter("WEEK",new Date().toLocaleDateString("en-US", { day: 'numeric' }) 
      + " " + new Date().toLocaleDateString("en-US", { month: 'long' })
      + " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }))} //full date as second arg
    >
      Week
    </button>
    <button  
       class={`bg-white text-sm inline-block border-t border-r border-b py-2 px-8 font-semibold rounded-tr-md rounded-br-md
       ${currentFilter === "DAY"  ? 'text-blue-400' : 'text-gray-400'}`} 
       onClick={() => changeFilter("DAY" ,new Date().toLocaleDateString("en-US", { day: 'numeric' }) 
       + " " + new Date().toLocaleDateString("en-US", { month: 'long' })
       + " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }))} //full date as second arg
    >
      Day
    </button>
    </div>
);

export default Filters;