import PropTypes from 'prop-types'
const Todo = ({ text, completed, togglleComplited, onDeleteTodo }) => {
    return   <> 
    <input
          type="checkbox"
          className="Checkbox"
          checked={completed}
          onChange={togglleComplited}
        />
        <p
          className={completed ? 'TodoList__text--complited' : 'TodoList__text'}
        >
          {text}
        </p>
        <button onClick={onDeleteTodo}>delete</button>
        </> 
}
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  togglleComplited: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}
export default Todo