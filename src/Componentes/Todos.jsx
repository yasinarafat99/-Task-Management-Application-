import React, { useContext } from 'react'
import { TodoContext } from '../Context/Context';
import Todo from './Todo';
import'./Todos.css'

function Todos() {
  const {state} = useContext(TodoContext)
  return (
    <div className='show_todo'>
      <p>
        {
            state.todos.map((todo) => (<Todo  key={todo.id} todo= {todo}/>))
        }
    </p>
    </div>
  )
}

export default Todos;