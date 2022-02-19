import React from 'react';
import {GrFormClose, GrFormEdit, GrFormCheckmark} from "react-icons/gr";
import { useTodoLayerValue } from '../context/TodoContext';

const Todo = ({todo}) => {

    const [{}, dispatch] = useTodoLayerValue(); //bir action çağıracağız
    const removeTodo = (todoId) => {
      dispatch({
        type: "REMOVE_TODO",
        payload: todoId,

     })
   }
   const completeTodo = (todoId) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,

   })
 }

  return (
    <div className='todo-row'>

      <div  onClick={()=> completeTodo(todo.id)}>{todo.content}</div>
      {/*tamamlandığında üstünü çizecek*/}

      <div className='todo-icons'>
        <GrFormClose className="todo-icon" onClick={()=> removeTodo(todo.id)} />
        <GrFormEdit className="todo-icon" />
      </div>
    </div>
  )
}

export default Todo;

