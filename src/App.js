
import React from 'react'
import { useState } from "react"
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import SubTasks from './components/SubTasks';
import Button from './components/Button';


function App() {
  const [tasks, setTasks] = useState([

    {
        id:1,
        text: 'Yoga - Surya Namaskar',
        day: '30 March 2023 at 6:00 AM',
        reminder: true
    },
    {
        id:2,
        text: 'Scrum Meeting',
        day: '30 March 2023 at 7:30 AM',
        reminder: true
    },
    {
        id:3,
        text: 'Breakfast',
        day: '30 March 2023 at 8:30 AM',
        reminder: false
    },
    {
        id:4,
        text: 'Training',
        day: '30 March 2023 at 9:00 AM',
        reminder: true
    },
    {
        id:5,
        text: 'Lunch',
        day: '30 March 2023 at 1:00 PM,',
        reminder: true
    }

])
  const [subtasks] = useState([
    {
      id:1,
      text: 'there are 12 steps'
    },
    {
      id:2,
      text: 'there are 12 person in meeting'
    },
    {
      id:3,
      text: 'You can have breakfast'
    }
  ])


  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
      <SubTasks subtasks={subtasks}/>
      <Button></Button>
    </div>
  );
}

export default App;
