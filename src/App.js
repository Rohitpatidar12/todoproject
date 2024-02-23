
import './App.css';
import { useState } from 'react';


var count = 1
function App() {

  const [editingFlag, setEditingFlag] = useState(-1)
  var [todo, setTodo] = useState([
    {
      id: count++,
      title: "todo1",
      completed: false
    },
    {
      id: count++,
      title: "todo2",
      completed: true
    },
    {
      id: count++,
      title: "todo3",
      completed: false
    }
  ])
  const addTodo = () => {
    console.log("Add todo")
    const todoText = document.getElementById("todoInput").value
    let todoObject = {
      id: count++,
      title: todoText,
      completed: false

    }
    console.log("todoText:" + todoText)
    todo.push(todoObject)
    setTodo([...todo])   //=> setTodo (["element 1", "element 2"])
  }
  // console.log("Length of Todo", todo.length)

  // const getDynamicList = () => {
  //   let response = ""
  //   for (let count1 = 0; count1 < todo.length; count1++) {
  //     console.log("todo[count].title" + todo[count1].title)
  //     response += <div>{todo[count1].title}</div>
  //     console.log(response)
  //   }
  //   console.log(response)
  //   return response
  // }
  const deleteTodo = (id) => {
    console.log("Delete Todo id:", id)
    todo = todo.filter(todoTemp => {
      if (id === todoTemp.id) {
        return false
      }
      else {
        return true
      }
    })
    setTodo([...todo])
  }
  const checkedChange = (id) => {
    console.log("checkedChange id:", id)
    todo.map(todoTemp => {
      if (id === todoTemp.id) {
        //update Complted property
        todoTemp.completed = !todoTemp.completed
      }
      return todoTemp
    })
    setTodo([...todo])
  }

  const editTodo = (id) => {
    console.log("edit todo")
    setEditingFlag(id)
  }

  const saveEditedTodo = (id) =>
  {
    console.log("saveEditedTodo")
    let updatedTodoText = document.getElementById("editingTodo").value
   todo.map(todoTemp =>
    {
      if(todoTemp.id === id)
      {
        todoTemp.title = updatedTodoText
      }
      return todoTemp          
      })
      setTodo([...todo])
      setEditingFlag(-1)    
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input id='todoInput' type='text' placeholder='Add your todo here...' />
      <button onClick={addTodo}>Add</button><br />
      {todo.map(todoTemp => {
        //console.log("tempTodo:"+tempTodo)
        return <div key={todoTemp.id}>
        { 
          todoTemp.completed === true ?// condition
          <> 
            <input type='checkbox' onChange={()=>checkedChange(todoTemp.id)} checked/> 
            <s> {todoTemp.title} </s>
          </>: //if execution
          <>
            <input type='checkbox' onChange={()=>checkedChange(todoTemp.id)}/>
            {
              editingFlag === todoTemp.id ?
              <>
                <input type='text' id='editingTodo' defaultValue={todoTemp.title}/>
                <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
                <button onClick={()=>saveEditedTodo(todoTemp.id)}>Save</button>
              </> :
              <>
                {todoTemp.title}
                <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
                <button onClick={()=>editTodo(todoTemp.id)}>Edit</button> </>//else execution
            }
          </>        
        }
        </div>
    })}
    {/* getDyanamicList()*/}
   </div>
  );
}
export default App;

/* Edit to do algorithm
--0. Introduce an editing flag state with default value of -1
--1. Edit button to be added for all items
--2. Function to handle edit button click
  --- Update editing flag with id
  --- Frontend Map - update frontend to show input for editing todo
3. Show text in input
4. Show a save button
5. Hide the edit button
6. Handle save button to save the title of todo and update the list
  - Update diting flag with default value


*/
