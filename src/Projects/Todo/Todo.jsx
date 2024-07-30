import './Todo.css';
import { useEffect, useState } from 'react';
import { Todoform } from "./Todoform";
import { TodoList } from "./TodoList";
import { TodoDate } from './TodoDate';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';



export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData());
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        if (!content) { return; }   // for checking empty or not
        // if (task.includes(content)) { return; }  // for check their already existence
        const ifTodoMatched = task.find((curTask) => curTask.content === content)

        if (ifTodoMatched) {
            return;
        }
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
        }
    // add data to local Storage
    setLocalStorageTodoData(task);

    const handleDeleteTodo = (value) => {

        const updateTask = task.filter((curEle) => curEle.content !== value)
        setTask(updateTask);
    }

    const handleClearButton = () => {
        setTask([]);
    }
    const HandleCheckToDo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            }
            else {
                return curTask;
            }
        })
        setTask(updatedTask);
    }
    // todo Date and time

    // console.log(formattedDate);
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />

            </header>
            <Todoform onAddToDo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return <TodoList data={curTask.content} key={curTask.id}
                                checked={curTask.checked}
                                onhandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckToDo={HandleCheckToDo} />
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearButton}>
                    clear All
                </button>
            </section>
        </section>
    )
}