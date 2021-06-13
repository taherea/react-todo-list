import React from "react";

const Tabs = ({ currentTab ,changeTab}) => (

<ul className="list-reset flex border-b">
  <li className="-mb-px mr-1">
    <button className={`text-sm inline-block py-2 px-8 font-semibold
       ${ currentTab === false ? 'bg-white text-blue-400 border-l border-t border-r rounded-t' : 'text-gray-300 bg-gray-100 rounded-tr rounded-tl hover:text-blue-darker '}`} 
       onClick={() => changeTab(false)}
       >To Do</button>
  </li>
  <li className="-mb-px mr-1">
  <button className={`text-sm inline-block py-2 px-8 font-semibold
       ${ currentTab === true  ? 'bg-white text-blue-400 border-l border-t border-r rounded-t border-b-white' : 'text-gray-300 bg-gray-100 rounded-tr rounded-tl hover:text-blue-darker '}`} 
       onClick={() => changeTab(true)}
       >Done</button>
  </li>
</ul>

);

export default React.memo(Tabs)
