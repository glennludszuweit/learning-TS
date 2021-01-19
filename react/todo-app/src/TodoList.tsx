import React from 'react';
import TodoListItem from './TodoListItem';

interface todoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<todoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
