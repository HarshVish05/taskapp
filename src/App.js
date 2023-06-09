
import React from 'react'
import { useState } from "react"
import { FaBeer } from 'react-icons/fa';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  const [showAddTask,setShowAddTask] = useState(false);

const [tasks, setTasks] = useState([

  {
      id:1,
      text: 'Cricket',
      day: '6:00 AM',
      reminder: true
  },
  {
      id:2,
      text: 'Breakfast',
      day: '8:30 AM',
      reminder: true
  },
  {
      id:3,
      text: 'Meeting',
      day: '9:30 AM',
      reminder: false
  },
  {
      id:4,
      text: 'Movies',
      day: '1:00 PM',
      reminder: true
  }

])
  // const detailstaks=(id) => {
  //   setTasks(tasks.day)
  // }

  // Task Reminder
  
  const OnTaskReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder}:task)
    )
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000+1);
    console.log(id);

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
 }


  // delete task
  const deleteTask = (id) => {
    // updating the state...which excludes item whose id is passed
      setTasks(tasks.filter((task) => task.id !== id))
  }



  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onReminder={OnTaskReminder}/>
      : 'All tasks done for Today'}
      <p>Let's relax and have a sip of</p>
      <FaBeer/>
      

     
    </div>
  );
}

export default App;
