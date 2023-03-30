import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please enter some task')
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add New Event'
            value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Time</label>
            <input type='text' placeholder='Mention the Date and Time'
            value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' checked={reminder}
            value={reminder} onChange={(e)=>setReminder(e.currentTarget.value)}></input>
        </div>
        <input type='submit' value='Save' className='btn btn-block'></input>


    </form>
  )
}

export default AddTask