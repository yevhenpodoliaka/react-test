import PropTypes from 'prop-types'
import IconBtn from '../components/IconBtn/IconBtn'
import { ReactComponent as DeleteIcon } from '../icons/delete.svg'
import styled from 'styled-components';


const Todo = ({ text, completed, togglleComplited, onDeleteTodo }) => {
    return   <TodoItem> 
    <input
          type="checkbox"
          className="Checkbox"
          checked={completed}
          onChange={togglleComplited}
        />
        <TodoText completed={completed}>
          {text}
      </TodoText>
      <IconBtn  onClick={onDeleteTodo} aria-label="delete todo">
        <DeleteIcon width="12" height="12" />
      </IconBtn>
        </TodoItem> 
}
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  togglleComplited: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}
export default Todo

const TodoItem= styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px;
    border: 1px solid blue;
    border-radius: 4px;
`
const TodoText = styled.p`
 text-decoration:${({completed} )=> {
  if (completed) {
  return "line-through"
 }
 }}
`