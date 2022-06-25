import React, { Component } from 'react';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import TodoList from './components/TodoList';
import initialTodos from './todo.json';
import TodoEditer from './components/TodoList/TodoEditer';
import TodoFilter from './components/TodoList/TodoFilter';

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
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: Date.now(),
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

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <Counter initialValue={0} step={1} /> */}

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
