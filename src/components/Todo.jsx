import React, {useState} from 'react';
import {GrFormClose, GrFormEdit, GrFormCheckmark} from "react-icons/gr";
import { useTodoLayerValue } from '../context/TodoContext';
import clsx from "clsx";

const Todo = ({todo}) => {

    const [editable, setEditTable] = useState(false)
    const [content, setContent] = useState(todo.content)
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
 const todoStyle = clsx({//birleşmiş stiller dosyası
    ["todo-row"]: true, //classNamei todo-row olana her zaman bu stilleri dahil et
    ["completed"]: todo.isCompleted,
 })

  return (
    <div className={todoStyle}> 
      {/*completed kısmı app.css den geliyor oraya yazmıştık, üstü çizilicek,
      bunu kullanabilmek için clsx küütphanesini indirdik.*/}

      <div  onClick={()=> completeTodo(todo.id)}>
        {
          editable ? 
          (<input type="text" className="todo-input-edit" value={content} onChange = {(event => setContent(event.target.value))} />) 
          : (todo.content)
        }
      </div>
      {/*tamamlandığında üstünü çizecek*/}

      <div className='todo-icons'>
        <GrFormClose className="todo-icon" onClick={()=> removeTodo(todo.id)} />
        <GrFormEdit className="todo-icon" onClick={()=> setEditTable(true)} />
      </div>
    </div>
  )
}

export default Todo;

