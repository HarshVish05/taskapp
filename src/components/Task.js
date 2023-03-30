import { FaTimes } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa';
import Button from './Button';



const Task = ({ task, onDelete }) => {
  return (
    <div className="event">
        <h3>
            {task.text} 
            <FaTimes style={{color: 'red', cursor:'pointer'}}
            onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task