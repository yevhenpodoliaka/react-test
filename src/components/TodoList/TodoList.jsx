import React from 'react';
import './TodoList.css';
const TodoList = ({ todos, onDeleteTodo,togglleComplited }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed}) => (
      
      <li className="TodoList__item" key={id}>
        <input type="checkbox"
          className="Checkbox"
          checked={completed}
          onChange={() => togglleComplited(id)} />
        
        {/* <p className="TodoList__text">{text}</p> */}
        <p className={completed?'TodoList__text--complited':'TodoList__text'}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
