import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ items ,removeItem,setEditItem,editItem,currentTab, onCheck ,showModalEdit,setShowModalEdit,closeModal,titleInput,
    handleSave,handleTitleChange,handleSelect,handleDateChange,handleTimeChange,
    setTitleInput,setStatusInput,setDateInput,setTimeInput,sortTitle} :
    { items :any,removeItem:any,setEditItem:any,editItem:any,currentTab:boolean, onCheck:any ,showModalEdit:boolean,setShowModalEdit:any,closeModal:any,titleInput:any,
        handleSave:any,handleTitleChange:any,handleSelect:any,handleDateChange:any,handleTimeChange:any,
        setTitleInput:any,setStatusInput:any,setDateInput:any,setTimeInput:any,sortTitle:any}) => (
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
            {items.filter((i: { isDone: boolean; }) => {
                return i.isDone === currentTab;
            }).map((it: { id: number }) => {
                return (<TaskItem key={it.id} setEditItem={setEditItem} editItem={editItem} item={it} removeItem={removeItem} onCheck={onCheck} showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} closeModal={closeModal} titleInput={titleInput} handleSave={handleSave} handleTitleChange={handleTitleChange} handleSelect={handleSelect} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} setTitleInput={setTitleInput} setStatusInput={setStatusInput} setDateInput={setDateInput} setTimeInput={setTimeInput} />);
            })}
        </tbody>
    </table>
    </div>
);

export default TaskList;
