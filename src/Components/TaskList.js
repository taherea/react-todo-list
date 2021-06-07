import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ items ,removeItem ,currentTab}) => (

    <table className="w-full divide-y divide-gray-100">
        <thead>
            <tr class="max-w-full divide-y divide-gray-100">
                <th
                    scope="col"
                    className="py-3 text-left text-sm font-bold text-gray-400 tracking-wider"
                >
                    
                    </th>
                <th
                    scope="col"
                    className="py-3 text-left text-sm font-bold text-gray-400 tracking-wider"
                >
                    Title
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
                <TaskItem key={item.id} item={item} removeItem={removeItem}/>
            ))}
        </tbody>
    </table>
);

export default TaskList;
