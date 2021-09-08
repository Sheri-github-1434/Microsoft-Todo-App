import React from 'react';
import "../../App.css";
import firebase from "../../firebase"

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
 
  
    const todoRef = firebase.database().ref('/tasks/myday');
    todoRef.update({
      complete: !todo.complete,
    });
    
  return (
    <li>
      <label
        style={{textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" defaultChecked={todo.complete}
           onClick={() => {  
            toggleTodo(todo)
            console.log(todo)
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};
