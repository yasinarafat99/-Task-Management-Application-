import todoheadImg from '../assets/Images/png-transparent-checklist-todo-list-thumbnail-removebg-preview.png'
import'./TitleTodo.css'
function TitleTodo() {
  return (
    <div>
        
        <div className='displayFlex'>
            <img src={todoheadImg}alt="" />
            <h1>My Todo</h1>
        </div>
        <hr />
    </div>
  )
}

export default TitleTodo;