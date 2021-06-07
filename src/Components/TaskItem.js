import React from "react";

const TaskItem = ({ item, removeItem  }) => {
  return (
    <tr key={item.id}>
      <td className="text-center">
        <input type="checkbox" class="h-4 w-4"/>
      </td>
      <td className="py-8 whitespace-nowrap">
        <div className="text-sm font-bold text-gray-900">{item.title}</div>
      </td>
      <td className="px-6 py-8 whitespace-nowrap">
        <span className={item.status==="Paused" ? "px-3 py-1 inline-flex text-sm leading-5 font-bold rounded-full text-white bg-yellow-400 " : "px-3 py-1 inline-flex text-sm leading-5 font-bold rounded-full text-white bg-blue-400 "}>
          {item.status}
        </span>
      </td>
      <td className="px-6 py-8 whitespace-nowrap text-sm font-bold text-gray-500">{item.date}</td>
      <td className="px-6 py-8 whitespace-nowrap">
        <div className="text-sm font-bold text-gray-900">{item.time}</div>
      </td>
      <td class="py-8 px-6 text-center">
        <div class="flex item-center justify-center">
          <div class="w-4 mr-5 transform hover:text-blue-600 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-current text-blue-400 bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </div>
          <button onClick={() => removeItem(item)}>
          <div class="w-4 mr-2 transform hover:text-red-600 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-current text-red-400 bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </div>
        </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;


