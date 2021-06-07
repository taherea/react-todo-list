
import React, { useState } from "react"; // ,useEffect
import TaskList from "../Components/TaskList";
import Filters from "../Components/Filters";
import Tabs from "../Components/Tabs";

function TaskContainer() {
  const [items, setItems] = useState([
    {
      id: "t1", title: "Task #1", status: "Paused",
      date: new Date(2021, 5, 5).toLocaleDateString("en-US", { day: 'numeric' })
        + " " + new Date(2021, 5, 5).toLocaleDateString("en-US", { month: 'long' })
        + " " + new Date(2021, 5, 5).toLocaleDateString("en-US", { year: 'numeric' }),
      time: "09:30 am", isDone: false
    },

    {
      id: "t2", title: "Task #2", status: "In Progress",
      date: new Date(2021, 5, 21).toLocaleDateString("en-US", { day: 'numeric' })
        + " " + new Date(2021, 5, 21).toLocaleDateString("en-US", { month: 'long' })
        + " " + new Date(2021, 5, 21).toLocaleDateString("en-US", { year: 'numeric' }),
      time: "11:00 am", isDone: false
    },

    {
      id: "t3", title: "Task #3", status: "In Progress",
      date: new Date(2021, 5, 7).toLocaleDateString("en-US", { day: 'numeric' })
        + " " + new Date(2021, 5, 7).toLocaleDateString("en-US", { month: 'long' })
        + " " + new Date(2021, 5, 7).toLocaleDateString("en-US", { year: 'numeric' }),
      time: "05:30 pm", isDone: false
    },
  ]
  );
  const [currentFilter, setcurrentFilter] = useState("MONTH");
  const [currentTab, setcurrentTab] = useState(false); //to do
  const [currentList, setcurrentList]=useState(items.filter(i => i.date.indexOf(new Date().toLocaleDateString("en-US", { month: 'long' })+ " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }))));//MONTH

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
          <button class="bg-blue-400 inline-block py-2 px-4 text-white font-semibold rounded">
            <div class="flex flex-row-reverse">
              <span class="ml-2 text-sm">Add Task</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-plus-lg mt-1" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </button>
        </div>
        <div>
          <Tabs currentTab={currentTab} changeTab={changeTab}></Tabs>
        </div>
        <div class="flex flex-row-reverse mt-10">
          <Filters currentFilter={currentFilter} changeFilter={changeFilter}></Filters>
        </div>
        <div class="mt-10">
          <TaskList items={currentList} removeItem={removeItem} currentTab={currentTab} />
        </div>
      </div>
    </>
  );
}

export default TaskContainer;
