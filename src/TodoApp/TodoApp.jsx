import { useState,useEffect } from 'react';
import TodoList from './TodoList';
import initialTodos from '../todo.json';
import TodoEditer from './TodoEditer';
import TodoFilter from './TodoFilter';
import Modal from '../components/Modal/Modal';
import IconBtn from '../components/IconBtn/IconBtn';
import { ReactComponent as AddIcon } from '../icons/add.svg';


export default function AppTodo() {
  const [todos, setTodos] = useState(() => { return JSON.parse(localStorage.getItem('todos')) ?? [...initialTodos]});
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
   localStorage.setItem('todos', JSON.stringify(todos))
},[todos])


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addTodo = text => {
    const todo = {
      id: String(Date.now()),
      text,
      completed: false,
    };
    setTodos(prevTodos => [todo, ...prevTodos]);
    toggleModal();
  };
  const complitedTodo = todoId => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };
  const deleteTodo = todoId => {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId));
  };

  const onChangeFilter = e => setFilter(e.currentTarget.value);

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  const calculateCompletedTodos = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  const totalTodoCount = todos.length;
  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();
  return (
    <>
      <IconBtn onClick={toggleModal} aria-label="add todo">
        <AddIcon width="40" height="40" />
      </IconBtn>
      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoEditer onSubmit={addTodo} />
        </Modal>
      )}

      <div>
        <p>кількість завдань: {totalTodoCount}</p>
        <p>кількість виконаних завдань:{completedTodoCount}</p>
      </div>
      <TodoFilter value={filter} onChangeFilter={onChangeFilter} />
      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        togglleComplited={complitedTodo}
      />
    </>
  );
}
