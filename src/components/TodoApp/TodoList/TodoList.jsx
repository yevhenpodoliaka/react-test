import React from 'react';
import PropTypes from 'prop-types'
import './TodoList.css';
import Todo from '../Todo/Todo';
const TodoList = ({ todos, onDeleteTodo, togglleComplited }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <Todo
          text={text}
          completed={completed}
          onDeleteTodo={() => { onDeleteTodo(id) }}
          togglleComplited={ ()=>{togglleComplited(id)}} />
      </li>
    ))}
  </ul>
);
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  onDeleteTodo: PropTypes.func.isRequired,
  togglleComplited: PropTypes.func.isRequired
 
}


export default TodoList;
