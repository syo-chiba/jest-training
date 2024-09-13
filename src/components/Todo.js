import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    setTodos([...todos, task]);
    setTask('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a task" 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
