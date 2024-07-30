import { useState } from "react";
export const Todoform = ({ onAddToDo }) => {
    const [inputValue, setInputValue] = useState({});
    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue({id: '', content: '', checked: false});
    }

    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete='off' value={inputValue.content}
                        onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>

        </section>
    );
}