import React from 'react'

function Todo(props) {
  return (
    <div className='center-4'>
       <div className='font' style={{textDecoration: props.todo.complete? "line-through" : ""}} onClick={props.toggleComplete}>{props.todo.text}   </div>
      <div>    <button className='X' onClick={props.onDelete}>X</button></div>

    </div>
  )
}

export default Todo