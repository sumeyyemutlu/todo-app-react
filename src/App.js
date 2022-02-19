import React, {useState} from 'react'
import {useTodoLayerValue} from "./context/TodoContext"
import TodoList from "./components/TodoList";
import "./App.css"
import Swal from 'sweetalert2'

const App = () => {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState('');
  //inputa yazı girildiğinde değişiklik yapacağız.

  const handleSubmit = (event) => {
    event.preventDefault(); //kaydetme işlemi yapıldığında sayfa otomatik referesh yapılmaz
    Swal.fire({
      fontSize: "14px",
      position: 'bottom-end',
      icon: 'success',
      title: 'Yeni yapılacak listeye eklendi!',
      showConfirmButton: false,
      timer: 1500
    })
    
    if(!content && content.length < 1) return 0;
    
    const newTodo = {
      id: Math.floor(Math.random()*45646565),
      //random id oluşturuduk
      content, //content: content
      isCompleted: false //yeni bir todo olduğu için tamamlanmadı
    };
    
    dispatch({ //action tanımlaması
      type: "ADD_TODO",
      payload: newTodo
     
    });
    
    setContent(' ') //yeni eklendikten sonra contentin içini boşalltık

  };
 

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
        type="text"
        className="todo-input"
        onChange={(event => setContent(event.target.value))}
        value={content}
        />
        <button className="todo-button">Ekle</button>
        
      </form>
       {/* TodoList componentine props yolladık */}
      <TodoList todos={todos} />
       
    </div>
  ) 
}

export default App