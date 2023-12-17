import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/Context";

function Todo({ todo }) {
  const {task, id} = todo;
  const [updateInput,setUpdateInput] = useState(task);
  const { dispatch } = useContext(TodoContext);
  const [isComplete, setIsComplete] = useState(false);
  const [isEdit, setIsEdit] = useState(false)

  const dltTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const updateHandle = ((id) => {
    setIsEdit(false);
    dispatch({
      type:"UPDATE_TODO",
      payload:{
        updateInput,
        id
      }
    })

  })

  return (
    <div>
      <div className="center">
        <div className="todoFlex">
          <div className="width">
            <p
              className="line_break"
              style={{
                color: isComplete && "#545150",
                textDecoration: isComplete && "line-through",
                // backgroundColor:isComplete && "black"
              }}
            >
              <input
                type="checkbox"
                name=""
                id=""
                onClick={(e) => setIsComplete(e.target.checked)}
              /> 
              
              {
                !isEdit ?<>{task}</> : <input className="updateInput" type="text" value={updateInput} onChange={(e) => setUpdateInput(e.target.value)} />
              }
             {/* {task} */}
            </p>
          </div>
          <div className="btn">
            
            {
              !isEdit ?<button onClick={()=> setIsEdit(true)}>Edit</button>:<button onClick={()=>updateHandle(id) }>Update</button>
            }
            <button className="btn-btndlt" onClick={() => dltTodo(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
