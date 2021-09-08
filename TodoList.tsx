import React, {useState, useEffect} from 'react';
import { TodoListItem } from './TodoListItem';
import firebase from "../../firebase"

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {

  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
  //   fetch("https://todo-app-clone-81ff3-default-rtdb.firebaseio.com/application.json", 
  //   {method: "GET"})
  //   .then((res) => {
  //     console.log(res.json)
  //   })
  //  .catch((err) => {
  //    console.log(err)
  //  })
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoLists = [];
      for (let id in todos) {
        todoLists.push({ id, ...todos[id] });
      }
        setTodoList(todoList);
    }, []);
  });

  return (
    <>
    <ul style={{
     fontFamily: "sans-serif",
    //  borderRadius: '8px',
     listStyle: "none",
     marginLeft: "256px",
     marginTop: '40px',
     color: "black",
     width: "80%",
    //  border: "none",
    //  flexDirection: "row",
    }}>
      {todos.map(todo => (    
 <TodoListItem key={Math.floor(Math.random()* 1000)} todo={todo} toggleTodo={toggleTodo} />
    
      ))}
    </ul>
    </>
  )
}