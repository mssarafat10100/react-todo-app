import React, {useState} from 'react'
import style from './NewTodo.module.css'

export const NewTodo = (props) => {

  const [todo, setTodo] = useState({title: "", desc: ""});
  const {title, desc} = todo; //desctashering

  const handleChange = (event) => {
    const name = event.target.name;
    
    setTodo((oldTodo) => {
      return {...oldTodo, [name]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title: '', desc: ''});
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name='title' placeholder="Name" value={title} onChange={handleChange} />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="title">Description: </label>
            <textarea type="text" id='desc' name='desc' placeholder="Description" value={desc} onChange={handleChange} />
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}
export default NewTodo;