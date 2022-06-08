import React from 'react'
// Todo CSS style ----|>
import style from './Todo.module.css';

export const Todo = (props) => {
    const { title, desc } = props.todo;
    const { id } = props; // props thake id pabo -->

    const handleClick = (id) => {
        props.onRemoveItem(id);
    }

  return (
      <article className={style.todo}>
          <div>
              <h4>{title}</h4>
              <p>{desc}</p>
          </div>
          <div>
              <button className={style.btn} onClick={()=> {handleClick(id)}}>
                  <i className='fa fa-trash fa-2x'></i>
              </button>
          </div>
      </article>
  )
}
export default Todo;