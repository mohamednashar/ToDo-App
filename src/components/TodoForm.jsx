import React,{useState} from 'react'
import shortid from 'shortid';

function TodoForm(props) {

    const [text,setText]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit({
            id: shortid.generate(),
            text:text,
            complete:false,
        })
        setText("")
    }

    const handleChange=(e)=>{
        setText(e.target.value)

    }


  return (
    <form className='center-1' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={text}></input>
        <button onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default TodoForm