import React from 'react'
import Todo from './Todo';
// Todos CSS style ----|>
import style from './Todos.module.css';

export const Todos = (props) => {
    console.log(props.todos);
  return (
      <section className={style.todos}>
              {props.todos.map((todo) => (<Todo todo={todo.todo} key={Todo.id} id={todo.id} onRemoveItem={props.onRemoveTodo} /> ))}
      </section>
  )
}
export default Todos;