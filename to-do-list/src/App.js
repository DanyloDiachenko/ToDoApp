import { useState } from 'react';

import './App.css';
import TodoForm from './components/ToDos/TodoForm';
import TodoList from './components/ToDos/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
