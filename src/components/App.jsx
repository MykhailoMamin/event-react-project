import { Component } from 'react';

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: true },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodo = todos.length;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        <div>
          <p>Загальна кількість: {totalTodo}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
