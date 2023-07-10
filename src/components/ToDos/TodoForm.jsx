import { useState } from "react";
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('')

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                addTodo(text);
                setText('');
            }}
            className={styles.form}
        >
            <input
                onChange={(event) => setText(event.target.value)}
                value={text}
                placeholder="Enter New To-Do Task"
                className={styles.input}
            />
            <button type='submit' className={styles.button}>Submit</button>
        </form>
    );
};

export default TodoForm;