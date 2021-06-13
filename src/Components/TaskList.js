import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ items ,removeItem,setEditItem,editItem,currentTab, onCheck ,showModalEdit,setShowModalEdit,closeModal,titleInput,
    handleSave,handleTitleChange,handleSelect,handleDateChange,handleTimeChange,
    setTitleInput,setStatusInput,setDateInput,setTimeInput,sortTitle}) => (
<div className="overflow-x-auto">
    <table className="w-full divide-y divide-gray-100">
        <thead>
            <tr className="max-w-full divide-y divide-gray-100">
                <th
                    scope="col"
                    className="py-3 text-left text-sm font-bold text-gray-400 tracking-wider"
                >
                </th>
                <th
                    scope="col"
                    className="py-3 text-left tracking-wider"
                >
                    <button className="text-sm font-bold text-gray-400" onClick={() => sortTitle()}>Title</button>
                    </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold text-gray-400 tracking-wider"
                >
                    Status
                    </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold text-gray-400 tracking-wider"
                >
                    Date
                    </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold text-gray-400 tracking-wider"
                >
                    Time
                    </th>
                <th scope="col" className="relative px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
            {items.filter(i => i.isDone === currentTab).map(item => (
                <TaskItem key={item.id} setEditItem={setEditItem} editItem={editItem} item={item} removeItem={removeItem} onCheck={onCheck} showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} closeModal={closeModal}
          titleInput={titleInput} handleSave={handleSave} handleTitleChange={handleTitleChange} handleSelect={handleSelect} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} 
          setTitleInput={setTitleInput} setStatusInput={setStatusInput} setDateInput={setDateInput} setTimeInput={setTimeInput}/>
            ))}
        </tbody>
    </table>
    </div>
);

export default TaskList;
