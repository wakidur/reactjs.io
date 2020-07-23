import React, { useState } from 'react'
const Todo = ({todo}) => <div className="todo">{todo.text}</div>;
function ReactToDoAppWithReactHooks() {
    /**
     * The first parameter, todos is what we are going to name our state.
     * The second parameter, setTodos is what we are going to use to set the state.
     * The hook of useState is what React uses to "hook" into the state or lifecycle of the component.
     */
    const [todos, setTodos] = useState([
        {
            text: "Learn about React" 
        },
        {
            text: "Meet friend for lunch" 
        },
        {
            text: "Build really cool todo app" 
        }
    ])

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

      
    return (
        <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
            />
          ))}
        </div>
      </div>
    )
}

export default ReactToDoAppWithReactHooks
