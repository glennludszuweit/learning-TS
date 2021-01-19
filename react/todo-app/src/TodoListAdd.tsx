import React from 'react';

interface todoListAddProps {
  addTodo: AddTodo;
}

const TodoListAdd: React.FC<todoListAddProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newTodo} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default TodoListAdd;
