import './App.css';
import TodoForm from './components/ToDos/TodoForm';
import TodoList from './components/ToDos/TodoList';

function App() {
  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
