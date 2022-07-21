import PropTypes from 'prop-types'
import IconBtn from '../../IconBtn/IconBtn'
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg'
import './Todo.css'


const Todo = ({ text, completed, togglleComplited, onDeleteTodo }) => {
    return   <div  className="Todo"> 
    <input
          type="checkbox"
          className="Checkbox"
          checked={completed}
          onChange={togglleComplited}
        />
        <p
          className={completed ? 'Todo__text--complited' : 'Todo__text'}
        >
          {text}
      </p>
      <IconBtn  onClick={onDeleteTodo} aria-label="delete todo">
        <DeleteIcon width="12" height="12" />
      </IconBtn>
        </div> 
}
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  togglleComplited: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}
export default Todo