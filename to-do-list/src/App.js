import { useState } from 'react';

import './App.css';
import TodoForm from './components/ToDos/TodoForm';
import TodoList from './components/ToDos/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodohandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idTodo) => idTodo !== index))
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodohandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;