
import './App.css';
import { useState } from 'react'
import TodoListItem from './TodoListItem';


var count = 1
function App() {

  const [editingFlag, setEditingFlag] = useState(-1)
  const [selectedFilter,setSelectedFilter] = useState("incomplete")
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

  const handleFilter = (filterType) =>
  {
    // console.log("Filter Clicked",filterType)
    switch(filterType)
    {
      case "incomplete":
        console.log("incomplete executed")
        setSelectedFilter("incomplete")
      break;

      case "completed":
        console.log("complete executed")
        setSelectedFilter("completed")
      break;

      case "all":
        console.log("all executed")
        setSelectedFilter("all")
      break;
      default:        
    }
  }

  // const divStyle ={
  //   backgroundColor:"#5cf785",
  //     margin:"10px",
  //     padding:"10px"
  //  }
  return (    
    // background-color
    // <div style={divStyle}
    <div id='parentDiv'
        //   {backgroundColor:"#5cf785", inliine css
        // margin:"10px",
        // padding:"10px"
      //}
   // }
   >
      <h1 className='header'>Todo App</h1>
      <div>
        <label onClick={()=>handleFilter("incomplete")}>Incomplete</label> | 
        <label onClick={()=>handleFilter("completed")}>Complted</label> | 
        <label onClick={()=>handleFilter("all")}>All</label>
      </div>

      <input id='todoInput' type='text' placeholder='Add your todo here...' />
      <button onClick={addTodo}>Add</button><br />
      {todo.map(todoTemp => 
      {
           switch(selectedFilter)
           {
              case "incomplete":
               if(!todoTemp.completed)
                {
                  return<TodoListItem
                  todoTemp={todoTemp}
                  editingFlag={editingFlag}
                  checkedChange={checkedChange}
                  deleteTodo={deleteTodo}
                  saveEditedTodo={saveEditedTodo}
                  editTodo={editTodo}/>
                }
               break;
               case "completed":
               if(todoTemp.completed)
                {
                 return<TodoListItem
                 todoTemp={todoTemp}
                 editingFlag={editingFlag}
                 checkedChange={checkedChange}
                 deleteTodo={deleteTodo}
                 saveEditedTodo={saveEditedTodo}
                 editTodo={editTodo}/>
                }
                 break;
                 case "all":
                 return<TodoListItem
                 todoTemp={todoTemp}
                 editingFlag={editingFlag}
                 checkedChange={checkedChange}
                 deleteTodo={deleteTodo}
                 saveEditedTodo={saveEditedTodo}
                 editTodo={editTodo}/>                       
                 default:                 

           }
        //console.log("tempTodo:"+tempTodo)
        
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



/* 
todotemp
editingFlag
checkedChange
deleteTodo
saveEditedTodo
editTodo
*/
