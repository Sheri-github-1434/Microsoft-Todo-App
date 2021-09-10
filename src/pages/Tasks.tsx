import React, { FC, useState } from "react"
import { TodoList } from "../components/Todofiles/TodoList";
import { AddTodoForm } from "../components/Todofiles/AddTodoForm";


export const Tasks: FC = () => {

        const initialTodos: Todo[] = [
      
        ];
        
        // function App() {
          const [todos, setTodos] = useState(initialTodos);
        
          const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
            const newTodos = todos.map(todo => {
              if (todo === selectedTodo) {
                return {
                  ...todo,
                  complete: !todo.complete,
                };
              }
              return todo;
            });
            setTodos(newTodos);
        
          };
        
          const addTodo: AddTodo = (text: string) => {
            const newTodo = { text, complete: false };
            setTodos([...todos, newTodo]);
          };
         return (
                 <>
         <div className="tasks">Tasks </div>
         <div className="contianer">
         <AddTodoForm addTodo={addTodo} />
     <TodoList todos={todos} toggleTodo={toggleTodo} />
         </div>
         </>
         )
    
 };

   export const NewList: FC = () => {
     return (
       <div>
     <div className="newList">Welcome To Our Todos App 
     <span><button><a href="/tasks/myday">Get Started</a></button></span>
      </div>
      
     </div>
     )
  } 