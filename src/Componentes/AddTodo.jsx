import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/Context";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleTodo = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return alert("Please add your task");

    const newTodo = {
      id: Date.now(),
      task: todo,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTodo("");
  };
  return (
    <div className="inputBox">
      <form onSubmit={handleTodo}>
        <div className="input_flex">
          <input
            type="text"
            value={todo}
            placeholder="Enter Task"
            onChange={(e) => setTodo(e.target.value)}
            required
          />
          <p>
            <button className="addBtn">Add</button>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
