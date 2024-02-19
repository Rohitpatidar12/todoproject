
import './App.css';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([])
  const addTodo = () =>
  {
    console.log("Add todo")
    const todoText = document.getElementById("todoInput").value
    console.log("todoText:"+todoText)
    todo.push(todoText)
    setTodo([...todo])   //=> setTodo (["element 1", "element 2"])

  }
  console.log("Length of Todo",todo.length)
  return (
    <div>
      <h1>Todo App</h1>
      <input id='todoInput' type='text' placeholder='Add your todo here...'/>
      <button onClick={addTodo}> Add</button><br/>
      {todo.map(tempTodo =>
      {
        //console.log("tempTodo:"+tempTodo)
        return <div>{tempTodo}</div>
      })}      
    </div>
  );
}

export default App;
