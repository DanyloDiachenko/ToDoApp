import styles from './Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <section style={{padding: '0 15px'}}>
            <div className={styles.todo}>
                <div className={styles.todoText}>{todo}</div>
            </div>
        </section>
    );
};

export default Todo;