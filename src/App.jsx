import { useState } from 'react'
import './App.css'
import {TodoForm} from './components/TodoForm.jsx'
import {TodoList} from './components/TodoList.jsx'
import {TodoItem} from './components/TodoItem.jsx'

function App() {

  const [todos, setTodos] = useState([
  { id: 1, text: "Aprender React", completed: false },
  { id: 2, text: "Hacer el proyecto", completed: false }
]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      text: texto,
      completed: false
    }
  setTodos([...todos, nuevaTarea]);
  }

    const eliminarTarea = (id) => {

    const nuevasTareas = todos.filter(tarea => tarea.id !== id)
    setTodos(nuevasTareas)

  }

  return (
    <>
      <h1 className='tl-header'>TodoList</h1>
      <TodoForm onAdd={agregarTarea}/>
      <TodoList todos={todos} onDelete={eliminarTarea}/>
    </>
  )
}

export default App
