import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem"; 
import Button from "./components/Button";

import CounterComponents from "./components/CounterComponents";


import './style.css';

const App = () => {
    return(
        <div className="todo-container">
          <CounterComponents />
            <Header title="Todoie App"/>
            <TodoItem text="Eat"/>
            <TodoItem completed ={true} text="Code"/>
            <TodoItem text="Play"/>
            <TodoItem text="Study"/>
            <TodoItem text="Sleep Again"/>
            <Button />

        </div>
    );
};

export default App;