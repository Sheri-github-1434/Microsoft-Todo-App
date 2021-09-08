import { FC, useState } from 'react';
import { TodoList } from "../components/Todofiles/TodoList";
import { AddTodoForm } from "../components/Todofiles/AddTodoForm";
// import firebase from "../firebase"


export const MyDay: FC = () => {
     const initialTodos: Todo[] = [];
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

      const value = new Date().toDateString()

    return (
        <>
         <div className="contianer">
             <div className="title">
               My Day
             </div>
              <div>
          <span id="date">{value}</span>
          <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
            </div>
        </div> 
       </>
    ); 

}