import React, { FC, useState } from "react"
import { TodoList } from "../components/Todofiles/TodoList";
import { AddTodoForm } from "../components/Todofiles/AddTodoForm";
import Button from "@material-ui/core/Button"

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
     <Button variant="contained" color="default" style={{backgroundColor: "#0275d8", marginLeft: "50px", display: "block"}}> 
       <a href="/tasks/myday">Get Started</a>
      </Button>
      </div>
      
     </div>
     )
  } 