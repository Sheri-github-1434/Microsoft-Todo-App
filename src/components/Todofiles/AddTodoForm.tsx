import React, { useState } from 'react';
import "../../App.css";
import firebase  from "../../firebase";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) =>  { 

  const [text, setText] = useState('')

  // const handleOnChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  //   setText(e.target.value)
  // }
  
  const createTodo = () => {
    const todoRef = firebase.database().ref("/tasks/myday"); 
  
    const todosRef = firebase.database().ref("/tasks/important");

    const todo = {
    text,
    id: Math.floor(Math.random()* 10000),
    complete: false,
    };

    todoRef.push(todo);
    todosRef.push(todo);
  }
  return (
    <>
    <form className="text">
      <input style={{display: "flex", marginTop: "20px", paddingLeft: '10px'}}
        type="text"
        placeholder="Add a task"
        name="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
          
        }}
       
      />
      <button style={{border: "none", cursor: "pointer", marginLeft: "260px", textAlign: "center", marginTop: "5px", borderTop: "2px solid red", borderBottom: "2px solid red"}}
        onClick={e => {
          e.preventDefault()
          addTodo(text);
          setText("");
          createTodo()
          
        }}
      >
        Add Todo
      </button>
    </form>
    </>
  );
};