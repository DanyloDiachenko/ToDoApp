import styles from './Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <section style={{padding: '0 15px'}}>
            <article className={styles.todo}>
                <div className={styles.todoText}>{todo}</div>
            </article>
        </section>
    );
};

export default Todo;