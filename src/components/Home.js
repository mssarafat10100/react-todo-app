import React, {useState} from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';
// Home css style ----|>
import style from './Home.module.css';
// uuid ----|>
import {v4 as uuidv4} from 'uuid';


export const Home = () => {

    const [todo, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return[...prevTodos, { id: uuidv4(), todo}];
        });
    };

    const handleRemoveTodo = (id) => {
        setTodos ((prevTodos) => {
            const filteredTodos = todo.filter((todo) => todo.id !== id);
            return filteredTodos;
        });
    }

  return (
    <div className={style.container}>
        <h1 className={style.titleText}><span>Todo App</span></h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <div className="{style.container_Dev}">
        <Todos todos={todo} onRemoveTodo={handleRemoveTodo} />
        </div>
    </div>
  )
}
export default Home;