import { useState } from "react";

const TodoForm = ({ addTodo }) => {

    const [text, setText] = useState('')

    return (
        <form onSubmit={() => }>
            <input placeholder="Enter New To-Do Task" />
            <button onClick={addTodo} type='submit'>Submit</button>
        </form>
    );
};

export default TodoForm;