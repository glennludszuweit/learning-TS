import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoListAdd from './TodoListAdd';

const initTodos: Array<Todo> = [
  { text: 'wake up', complete: false },
  { text: 'make coffee', complete: true },
  { text: 'get coding', complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = React.useState(initTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <br />
      <TodoListAdd addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
