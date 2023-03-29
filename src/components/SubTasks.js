import React from 'react'

const SubTasks = ({subtasks}) => {
  return (
    <>
        { 
            subtasks.map((subtask) => (
            <h4 key={subtask.id}>
                {subtask.text}
            </h4>
            ))
        } 

    </>
  )
}

export default SubTasks