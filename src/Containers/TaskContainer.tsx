
import React, { useState ,useEffect, useCallback} from "react";
import TaskList from "../Components/TaskList";
import Filters from "../Components/Filters";
import Tabs from "../Components/Tabs";
import ModalAdd from "../Components/ModalAdd";

interface Item {
  id: number;
  title: string;
  status: string;
  color: string;
  date: string;
  time: string;
  isDone: boolean;
}
const DEFAULT_ITEMS: Item[] = [
  {
    id: 1, title: "Task #1", status: "Paused", color: "bg-yellow-400",
    date: new Date(2021, 5, 13).toLocaleDateString("en-US", { day: '2-digit' })
      + " " + new Date(2021, 5, 13).toLocaleDateString("en-US", { month: 'short' })
      + " " + new Date(2021, 5, 13).toLocaleDateString("en-US", { year: 'numeric' }),
    time: "09:30 am", isDone: false
  },

  {
    id: 2, title: "Task #2", status: "In Progress", color: "bg-blue-400",
    date: new Date(2021, 5, 21).toLocaleDateString("en-US", { day: '2-digit' })
      + " " + new Date(2021, 5, 21).toLocaleDateString("en-US", { month: 'short' })
      + " " + new Date(2021, 5, 21).toLocaleDateString("en-US", { year: 'numeric' }),
    time: "11:00 am", isDone: false
  },

  {
    id: 3, title: "Task #3", status: "In Progress", color: "bg-blue-400",
    date: new Date(2021, 5, 15).toLocaleDateString("en-US", { day: '2-digit' })
      + " " + new Date(2021, 5, 15).toLocaleDateString("en-US", { month: 'short' })
      + " " + new Date(2021, 5, 15).toLocaleDateString("en-US", { year: 'numeric' }),
    time: "05:30 pm", isDone: false
  },
];
function TaskContainer():JSX.Element {
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [currentFilter, setcurrentFilter] = useState<string>("MONTH");
  const [currentTab, setcurrentTab] = useState<boolean>(false); //to do
  const [currentList, setcurrentList]=useState<Item[]>(items.filter(i => i.date.indexOf(new Date().toLocaleDateString("en-US", { month: 'short' })+ " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }))));//MONTH
  const [ titleInput, setTitleInput ] = useState<any>("");
  const [ statusInput, setStatusInput ] = useState<any>(null);
  const [ dateInput, setDateInput ] = useState<any>(null);
  const [ timeInput, setTimeInput ] = useState<any>(null);
  const [ editItem, setEditItem] = useState<any>(null);
  const [ order, setOrder] = useState<boolean>(true);
  
  const sortTitle = () => {
    let copy = [...currentList];
    if (order) {
      copy.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    }
    else{
      copy.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      });
    }
    setcurrentList(copy);
    setOrder(!order);
  }
  
  const closeModal = () => {
  setTitleInput("");
  setStatusInput(null);
  setDateInput(null);
  setTimeInput(null);
  setShowModalEdit(false)

  if (showModal)
  setShowModal(false);
  else if(showModalEdit)
  setShowModalEdit(false)
};


  const changeTab = useCallback((newTab) => {
    setcurrentTab(newTab);
  },[])

  const changeFilter = useCallback((newFilter, filter) => {
    if (newFilter === "WEEK") {
      let spaceIndexToday = filter.indexOf(" ");
      let day = parseInt(filter.substring(0,spaceIndexToday), 10);
      let start = (day - 3)
      let end = (day + 3)
      let filtered = items.filter(item => parseInt(item.date.substring(0,item.date.indexOf(" ")), 10) <= end  &&  parseInt(item.date.substring(0,item.date.indexOf(" ")), 10) >= start);
      setcurrentFilter(newFilter);
      setcurrentList(filtered)
    }
    else {
      setcurrentFilter(newFilter);
      setcurrentList(items.filter(i => i.date.indexOf(filter) >= 0))
    }

  },[items])

  const onCheck = (taskId:number) => {
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

  const handleTitleChange = (e :React.FormEvent<HTMLInputElement>) => {
    setTitleInput(e.currentTarget.value)
  }
  const handleSelect =(e:React.FormEvent<HTMLSelectElement>) => {
  setStatusInput(e.currentTarget.value)
  }
  const handleDateChange = (value:string) :void => {
    setDateInput(value);
  };
  const handleTimeChange = (value:string) :void=> {
    setTimeInput(value);
  };
const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  addTask(titleInput,statusInput,dateInput,timeInput);
  setTitleInput("");
  setStatusInput(null);
  setDateInput(null);
  setTimeInput(null);
  setShowModal(false);
}
const addTask = (titleInput:any,statusInput:any,dateInput:any,timeInput:any) => {
  let copy = [...items];
  let maxid = Math.max(...items.map(i=>i.id))
  copy = [...copy, { id: maxid + 1, title: (titleInput !=="" ? titleInput : "None"), status: (statusInput!=null ? statusInput: "In Progress" ),
   color: (statusInput==="Done" ? "bg-green-400" :statusInput==="In Progress" ? "bg-blue-400" :statusInput==="Paused" ? "bg-yellow-400" : "bg-blue-400" ),
  date:(dateInput!=null ? 
    dateInput.toDate().toLocaleDateString("en-US", { day: '2-digit' })
    + " " + dateInput.toDate().toLocaleDateString("en-US", { month: 'short' })
    + " " + dateInput.toDate().toLocaleDateString("en-US", { year: 'numeric' })
    : new Date().toLocaleDateString("en-US", { day: '2-digit' })
    + " " +  new Date().toLocaleDateString("en-US", { month: 'short' })
    + " " + new Date().toLocaleDateString("en-US", { year: 'numeric' }) ) ,
  time: (timeInput != null ? timeInput.format('hh:mm a') : "12:00 am"), isDone: (statusInput==="Done" ? true : false)}];
  setItems(copy);
  setcurrentList(copy);
}
const handleSave = (e :React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  editTask(titleInput,statusInput,dateInput,timeInput,editItem);
  setTitleInput("");
  setStatusInput(null);
  setDateInput(null);
  setTimeInput(null);
  closeModal();
}
const editTask = (titleInput:any,statusInput:any,dateInput:any,timeInput:any,editItem:any) => {
  const edited =items.map(el => (el.id === editItem.id ? {...el, 
    title :titleInput, status :statusInput,
    color: (statusInput==="Done" ? "bg-green-400" :statusInput==="In Progress" ? "bg-blue-400" :statusInput==="Paused" ? "bg-yellow-400" : "bg-blue-400" ),
    date:(dateInput === null ? 
      new Date().toLocaleDateString("en-US", { day: '2-digit' })
      + " " +  new Date().toLocaleDateString("en-US", { month: 'short' })
      + " " + new Date().toLocaleDateString("en-US", { year: 'numeric' })
      : dateInput!== editItem.date ? 
      dateInput.toDate().toLocaleDateString("en-US", { day: '2-digit' })
      + " " + dateInput.toDate().toLocaleDateString("en-US", { month: 'short' })
      + " " + dateInput.toDate().toLocaleDateString("en-US", { year: 'numeric' })
      : editItem.date ) ,
      time:timeInput.format('hh:mm a'), isDone: (statusInput==="Done" ? true : false)} : el));
  setItems(edited);
  setcurrentList(edited);
}

  const removeItem = (itemToBeDeleted:Item) => {
   setItems(items.filter((item) => itemToBeDeleted !== item));
   setcurrentList(currentList.filter((item) => itemToBeDeleted !== item));
  };
  
  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('items') ?? "");
      if (items) {
        setItems(items);
      }
    }, []);
  
  useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

  useEffect(() => {
      const currentList = JSON.parse(localStorage.getItem('currentList') ?? "");
      if (currentList) {
        setcurrentList(currentList);
      }
    }, []);
  
  useEffect(() => {
      localStorage.setItem('currentList', JSON.stringify(currentList));
    }, [currentList]);
 
  return (
    <>
      <div className="py-10 px-10 md:py-20 md:px-20">
        <div className="flex flex-row-reverse mt-15 mb-2">
          <button className="bg-blue-400 inline-block py-2 px-4 text-white font-semibold rounded" onClick={() => setShowModal(true)}>
            <div className="flex flex-row-reverse">
              <span className="ml-2 text-sm">Add Task</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-plus-lg mt-1" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </button>
          {showModal ? (<ModalAdd closeModal={closeModal} handleSubmit={handleSubmit} handleTitleChange={handleTitleChange} 
          titleInput={titleInput} handleSelect={handleSelect} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange}/>) : null}
        </div>
        <div>
          <Tabs currentTab={currentTab} changeTab={changeTab}></Tabs>
        </div>
        <div className="flex flex-row-reverse mt-10">
          <Filters currentFilter={currentFilter} changeFilter={changeFilter}></Filters>
        </div>
        <div className="mt-10">
          <TaskList onCheck={onCheck} items={currentList} setEditItem={setEditItem} editItem={editItem} removeItem={removeItem} currentTab={currentTab} showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} closeModal={closeModal}
          titleInput={titleInput} handleSave={handleSave} handleTitleChange={handleTitleChange} handleSelect={handleSelect} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} 
          setTitleInput={setTitleInput} setStatusInput={setStatusInput} setDateInput={setDateInput} setTimeInput={setTimeInput} sortTitle={sortTitle}/>
        </div>
      </div>
    </>
  );
}

export default TaskContainer;
