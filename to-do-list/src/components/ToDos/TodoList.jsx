import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <section>
            {!todos.length && <h2>To-Do list is empty...</h2>}
            <article>
                {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
            </article>
        </section>
    );
};

export default TodoList;