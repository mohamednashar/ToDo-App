import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  let [todos, setTodos] = useState([]);

  const [todoToShow, setTodoToShow] = useState("all");

  const [toggleAllCompleted, settoggleAllCompleted] = useState("true");

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoToShow = (s) => {
    setTodoToShow(s);
  };

  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoToShow === "completed") {
    todos = todos.filter((todo) => todo.complete);
  }

  const toggleComplete=(id)=>{
    setTodos(todos.map((todo)=>{
      if(todo.id===id)
      {
        return{
          ...todo,
          complete:!todo.complete
        }
      }
      else {return todo;}
    }))

  }

  const removeAllCompleted=()=>{
    setTodos(todos.filter((todo) => !todo.complete))
  }

  return (
    <div className="center-main">
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          toggleComplete={()=>toggleComplete(todo.id)}
        />
      ))}

      <div className="center-2">
        <button onClick={() => updateTodoToShow("all")}>All</button>
        <button onClick={() => updateTodoToShow("active")}>Active</button>
        <button onClick={() => updateTodoToShow("completed")}>Completed</button>
      </div>
      <div className="center-3">
      <button onClick={removeAllCompleted}>Remove All Completed Todos</button>
        <button onClick={()=>{
          setTodos(
            todos.map((todo)=>({
              ...todo, 
              complete:toggleAllCompleted,
            
            }))
          )
          settoggleAllCompleted(!toggleAllCompleted)
        }
        }>Toggle All Complete : {`${toggleAllCompleted}`}</button>
      </div>
    </div>
  );
}

export default App;
