import styles from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';

const Todo = ({ todo }) => {
    return (
        <section style={{ padding: '0 15px' }}>
            <article className={styles.todo}>
                <RiTodoFill className={styles.todoIcon} />
                <div className={styles.todoText}>{todo}</div>
            </article>
        </section>
    );
};

export default Todo;