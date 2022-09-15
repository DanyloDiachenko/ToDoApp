import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <>
            {!todos.length && <h2>To-Do list is empty...</h2>}
            {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
        </>
    );
};

export default TodoList;