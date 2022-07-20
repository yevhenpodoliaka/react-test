import React, { Component } from 'react';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import TodoList from './components/TodoApp/TodoList/TodoList';
// import initialTodos from './todo.json';
import TodoEditer from './components/TodoApp/TodoEditer/TodoEditer';
import TodoFilter from './components/TodoApp/TodoFilter/TodoFilter';
import Modal from './components/Modal/Modal';
// import './App.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal:false,
  };
  toggleModal = () => {
    this.setState(({showModal})=> ({
      showModal:!showModal
    }))
}
  addTodo = text => {
    const todo = {
      id: String(Date.now()),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };
  complitedTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onChangeFilter = e => this.setState({ filter: e.currentTarget.value });

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };
  componentDidMount() {
    console.log('componentDidMount');
    const storageTodos = JSON.parse(localStorage.getItem('todos')) 
    if (storageTodos) {
         this.setState({todos:storageTodos})
    }

 
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('componentDidUpdate', prevState);
    console.log(this.state);
    if (this.state.todos!==prevState.todos) {
      console.log('new');
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

  }
  render() {
    console.log('App render');
    const { todos, filter,showModal } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <Counter initialValue={0} step={1} /> */}
        <button type='button' onClick={this.toggleModal}>open</button>
        {showModal&&<Modal><h2>modal</h2> <button type="button" onClick={this.toggleModal}>
          close
        </button></Modal>}

        <div>
          <p>кількість завдань: {totalTodoCount}</p>
          <p>кількість виконаних завдань:{completedTodoCount}</p>
        </div>
        <TodoEditer onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChangeFilter={this.onChangeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          togglleComplited={this.complitedTodo}
        />
      
      </>
    );
  }
}
export default App;
