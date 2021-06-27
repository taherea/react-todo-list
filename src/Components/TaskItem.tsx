import React from "react";
import ModalEdit from "../Components/ModalEdit";
import moment from "moment";

const TaskItem = ({ removeItem, setEditItem,editItem,onCheck,setShowModalEdit,closeModal,showModalEdit,
  item,titleInput,handleSave,handleTitleChange,handleSelect,handleDateChange,handleTimeChange ,
  setTitleInput,setStatusInput,setDateInput,setTimeInput}:
  { removeItem:any, setEditItem:any,editItem:any,onCheck:any,setShowModalEdit:any,closeModal:any,showModalEdit:boolean,
    item:any ,titleInput:any,handleSave:any,handleTitleChange:any,handleSelect:any,handleDateChange:any,handleTimeChange:any ,
    setTitleInput:any,setStatusInput:any,setDateInput:any,setTimeInput:any}) => (<tr key={item.id}>
  <td className="text-center">
    <input type="checkbox" className="h-4 w-4" onChange={() => onCheck(item.id)} defaultChecked={item.isDone} />
  </td>
  <td className="py-8 whitespace-nowrap">
    <div className="text-sm font-bold text-gray-900">{item.title}</div>
  </td>
  <td className="px-6 py-8 whitespace-nowrap">
    <span className={`px-3 py-1 inline-flex text-sm leading-5 font-bold rounded-full text-white ${item.color}`}>
      {item.status}
    </span>
  </td>
  <td className="px-6 py-8 whitespace-nowrap text-sm font-bold text-gray-900">{item.date}</td>
  <td className="px-6 py-8 whitespace-nowrap">
    <div className="text-sm font-bold text-gray-900">{item.time}</div>
  </td>
  <td className="py-8 px-6 text-center">
    <div className="flex item-center justify-center">
      <button onClick={() => {
        setShowModalEdit(true);
        setEditItem(item);
        setTitleInput(item.title);
        setStatusInput(item.status);
        setDateInput(item.date);
        setTimeInput(moment(item.time, 'hh:mm a'));
      } }>
        <div className="w-4 mr-5 transform hover:text-blue-600 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-current text-blue-400 bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </div>
      </button>
      {showModalEdit ? (<ModalEdit showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} closeModal={closeModal} titleInput={titleInput} handleSave={handleSave} editItem={editItem} handleTitleChange={handleTitleChange} handleSelect={handleSelect} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} />) : null}
      <button onClick={() => removeItem(item)}>
        <div className="w-4 mr-2 transform hover:text-red-600 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-current text-red-400 bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </div>
      </button>
    </div>
  </td>
</tr>);

export default TaskItem;


