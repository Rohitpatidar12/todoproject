import './TodoListItem.css'

const TodoListItem = (props) =>
{
    return<div id="todoListItem" key={props.todoTemp.id}>
    { 
      props.todoTemp.completed === true ?// condition
      <> 
        <input type='checkbox' onChange={()=>props.checkedChange(props.todoTemp.id)} checked/> 
        <s> {props.todoTemp.title} </s>
      </>: //if execution
      <>
        <input type='checkbox' onChange={()=>props.checkedChange(props.todoTemp.id)}/>
        {
          props.editingFlag === props.todoTemp.id ?
          <>
            <input type='text' id='editingTodo' defaultValue={props.todoTemp.title}/>
            <button onClick={()=>props.deleteTodo(props.todoTemp.id)}>Delete</button>
            <button onClick={()=>props.saveEditedTodo(props.todoTemp.id)}>Save</button>
          </> :
          <>
            {props.todoTemp.title}
            <button onClick={()=>props.deleteTodo(props.todoTemp.id)}>Delete</button>
            <button onClick={()=>props.editTodo(props.todoTemp.id)}>Edit</button> </>//else execution
        }
      </>        
    }
    </div>
}

export default TodoListItem;