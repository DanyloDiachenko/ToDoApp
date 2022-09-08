import { useState } from "react";

const TodoForm = ({ addTodo }) => {

    const [text, setText] = useState('')

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                addTodo(text);
                setText('');
            }}>
            <input
                onChange={(event) => setText(event.target.value)}
                value={text}
                placeholder="Enter New To-Do Task"
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default TodoForm;