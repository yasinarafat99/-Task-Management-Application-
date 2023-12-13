import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/Context";

function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [isComplete, setIsComplete] = useState(false);

  const dltTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div>
      <div className="center">
        <div className="todoFlex">
          <div className="width">
            <p
              className="line_break"
              style={{
                color: isComplete && "#4B5154",
                textDecoration: isComplete && "line-through",
              }}
            >
              <input
                type="checkbox"
                name=""
                id=""
                onClick={(e) => setIsComplete(e.target.checked)}
              />
              {todo.task}
            </p>
          </div>
          <div>
            <button className="btn-btndlt" onClick={() => dltTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
