
import React, { useState } from "react"; // ,useEffect
import TaskList from "../Components/TaskList";
import Filters from "../Components/Filters";
import Tabs from "../Components/Tabs";
import ModalAdd from "../Components/ModalAdd";

function TaskContainer() {
  const [items, setItems] = useState([
    {
      id: 1, title: "Task #1", status: "Paused", color: "bg-yellow-400",
      date: new Date(2021, 5, 5).toLocaleDateString("en-US", { day: 'numeric' })
        + " " + new Date(2021, 5, 5).toLocaleDateString("en-US", { month: 'long' })
        + " " + new Date(2021, 5, 5).toLocaleDateString("en-US", { year: 'numeric' }),
      time: "09:30 am", isDone: false
    },

    {
      id: 2, title: "Task #2", status: "In Progress", color: "bg-blue-400",
      date: new Date(2021, 5, 21).toLocaleDateString("en-US", { day: 'numeric' })
        + " " + new Date(2021, 5, 21).toLocaleDateString("en-US", { month: 'long' })
        + " " + new Date(2021, 5, 21).toLocaleDateString("en-US", { year: 'numeric' }),
      time: "11:00 am", isDone: false
    },

    {
      id: 3, title: "Task #3", status: "In Progress", color: "bg-blue-400",
      date: new Date(2021, 5, 8).toLocaleDateString("en-US", { day: 'numeric' })
        + " " + new Date(2021, 5, 8).toLocaleDateString("en-US", { month: 'long' })
        + " " + new Date(2021, 5, 8).toLocaleDateString("en-US", { year: 'numeric' }),
      time: "05:30 pm", isDone: false
    },
  ]
  );
  const [showModal, setShowModal] = React.useState(false);
  const [currentFilter, setcurrentFilter] = useState("MONTH");
  const [currentTab, setcurrentTab] = useState(false); //to do
  const [currentList, setcurrentList]=useState(items.filter(i => i.date.indexOf(new Date().toLocaleDateString("en-US", { month: 'long' })+ " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }))));//MONTH
  const [ titleInput, setTitleInput ] = useState(null);
  const [ statusInput, setStatusInput ] = useState(null);
  const [ dateInput, setDateInput ] = useState(null);
  const [ timeInput, setTimeInput ] = useState(null);

  const changeTab = newTab => {
    setcurrentTab(newTab);
  };

  const changeFilter = (newFilter, filter) => {
    if (newFilter === "WEEK") {
      let spaceIndexToday = filter.indexOf(" ");
      let day = parseInt(filter.substring(0,spaceIndexToday), 10);
      let start = (day - 3)
      let end = (day + 3)
      let filtered = items.filter(inWeek);
      function inWeek(item) {
        let spaceIndexItem = item.date.indexOf(" ");
        let dayOfItem = parseInt(item.date.substring(0,spaceIndexItem), 10);
        return (dayOfItem <= end && dayOfItem >= start)
      }
      setcurrentFilter(newFilter);
      setcurrentList(filtered)
    }
    else {
      setcurrentFilter(newFilter);
      setcurrentList(items.filter(i => i.date.indexOf(filter) >= 0))
    }

  };

  const onCheck = taskId => {
    const newList = items.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
          status: (!task.isDone ? "Done" : "In progress"),
          color: (!task.isDone ? "bg-green-400" : "bg-blue-400")
        };
      }
      return task;
    });
    setItems(newList);
    setcurrentList(newList);
  };

  const handleChange = (e) => {
    setTitleInput(e.currentTarget.value)
}
const handleSelect =(e) => {
  setStatusInput(e.currentTarget.value)
}
  const handleDateChange = value => {
    setDateInput(value);
  };
  const handleTimeChange = (value)=> {
    setTimeInput(value);
  };
const handleSubmit = (e) => {
  e.preventDefault();
  addTask(titleInput,statusInput,dateInput,timeInput);
  setTitleInput(null);
  setStatusInput(null);
  setDateInput(null);
  setTimeInput(null);
  setShowModal(false);
}
const addTask = (titleInput,statusInput,dateInput,timeInput) => {
  let copy = [...items];
  copy = [...copy, { id: items.length + 1, title: (titleInput !=null ? titleInput : "None"), status: (statusInput!=null ? statusInput: "In Progress" ),
   color: (statusInput==="Done" ? "bg-green-400" :statusInput==="In Progress" ? "bg-blue-400" : "bg-yellow-400" ),
  date:(dateInput!=null ? 
    dateInput.toDate().toLocaleDateString("en-US", { day: 'numeric' })
    + " " + dateInput.toDate().toLocaleDateString("en-US", { month: 'long' })
    + " " + dateInput.toDate().toLocaleDateString("en-US", { year: 'numeric' })
    : new Date().toLocaleDateString("en-US", { day: 'numeric' })
    + " " +  new Date().toLocaleDateString("en-US", { month: 'long' })
    + " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }) ) ,
  time: (timeInput != null ? timeInput.format('hh:mm a') : "--:--"), isDone: (statusInput==="Done" ? true : false)}];
  setItems(copy);
  setcurrentList(copy);
}

  const removeItem = itemToBeDeleted => {
   setItems(items.filter((item) => itemToBeDeleted !== item));
  };
  /*
  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        setItems(items);
      }
    }, []);
  
  useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
  */
 
  return (
    <>
      <div class="py-20 px-20">
        <div class="flex flex-row-reverse mt-15">
          <button class="bg-blue-400 inline-block py-2 px-4 text-white font-semibold rounded" onClick={() => setShowModal(true)}>
            <div class="flex flex-row-reverse">
              <span class="ml-2 text-sm">Add Task</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-plus-lg mt-1" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </button>
          {showModal ? (<ModalAdd setShowModal={setShowModal} handleSubmit={handleSubmit} handleChange={handleChange} 
          titleInput={titleInput} handleSelect={handleSelect} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange}/>) : null}
        </div>
        <div>
          <Tabs currentTab={currentTab} changeTab={changeTab}></Tabs>
        </div>
        <div class="flex flex-row-reverse mt-10">
          <Filters currentFilter={currentFilter} changeFilter={changeFilter}></Filters>
        </div>
        <div class="mt-10">
          <TaskList onCheck={onCheck} items={currentList} removeItem={removeItem} currentTab={currentTab}/>
        </div>
      </div>
    </>
  );
}

export default TaskContainer;
