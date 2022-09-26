import styles from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <section style={{ padding: '0 15px' }}>
            <article className={styles.todo}>
                <div className={styles.todoRow}>
                    <div style={{display: 'flex'}}>
                        <RiTodoFill className={styles.todoIcon} />
                        <div className={styles.todoText}>{todo}</div>
                    </div>
                    <div>
                        <CgClose className={styles.removeTodo} onClick={() => deleteTodo(index)} />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Todo;