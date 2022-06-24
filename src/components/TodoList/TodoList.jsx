import React from 'react';
import './TodoList.css';
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li className="TodoList__item" key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
