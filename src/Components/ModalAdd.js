import React from "react";
import { TimePicker, DatePicker } from 'antd';
import 'antd/dist/antd.css';

const ModalAdd = ({ closeModal ,handleSubmit,handleTitleChange,titleInput,handleSelect,handleDateChange,handleTimeChange}) => (
  <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-2xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-2 rounded-t">
            <button
              className="ml-auto float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="mr-3 text-red-500 text-lg block outline-none focus:outline-none">×</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative px-6 py-1 flex-auto">
              <div>
                <label htmlFor='TaskTitle'>Title *</label>
                <input className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
                value={titleInput} 
                type="text" 
                onChange={handleTitleChange} />
              </div>
              <div>
                <label htmlFor='status'>Status</label>
                <select id="status" name="status" onChange={handleSelect} className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                  <option value="In Progress">In Progress</option>
                  <option value="Paused">Paused</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div>
                <label htmlFor='date'>Date</label>
                <div>
                <DatePicker placeholder="select date" onChange={handleDateChange} style={{
                    width: "100%",
                    padding: "0.5rem",
                    outline: "2px solid transparent",
                    margin: "1px",
                    fontSize: "17px",
                    border:"1px solid ##E9EBEE",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                  }}/>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor='date'>Time</label>
                <div>
                <TimePicker placeholder="select time" onChange={handleTimeChange} use12Hours format="h:mm a" style={{
                    width: "100%",
                    padding: "0.5rem",
                    outline: "2px solid transparent",
                    margin: "1px",
                    fontSize: "17px",
                    border:"1px solid ##E9EBEE",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                  }}/>
                </div>
              </div>

            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-5">
              <button
                className="bg-gray-200 inline-block py-2 px-4 text-gray-600 font-semibold rounded mr-2"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className={`inline-block py-2 px-4 text-white font-semibold rounded
                ${titleInput != null  ? 'bg-blue-400 ' : 'bg-blue-200'}`}
                type="sumbit"
                disabled={!titleInput}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
);

export default ModalAdd;
