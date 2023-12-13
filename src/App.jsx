import React from "react";
import Provider from "./Provider/Provider";
import Todos from "./Componentes/Todos";
import AddTodo from "./Componentes/AddTodo";
import TitleTodo from "./Componentes/TitleTodo";

function App() {
  return (
    <Provider>
      <div className="main">
        <TitleTodo />
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
