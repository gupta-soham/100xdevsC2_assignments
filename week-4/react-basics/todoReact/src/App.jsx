import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
      // Create a new todo
      const newTodo = {
        title: title,
        description: description,
      };

      // Update the state with the new todo
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      // Clear input fields
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
    } else {
      alert('Please enter both title and description.');
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" id="title" placeholder="Todo title" /> <br /><br />
      <input type="text" id="description" placeholder="Todo description" /> <br /><br />
      <button onClick={handleAddTodo}>Add todo</button>
      <br /> <br />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}:</strong> {todo.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
