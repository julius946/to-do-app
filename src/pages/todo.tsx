// src/pages/Todo.tsx

import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center pt-40">
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} className="text-black" />
        <button onClick={addTodo} className="border px-4">Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)} className="border px-4" style={{ backgroundColor: 'red' }}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;