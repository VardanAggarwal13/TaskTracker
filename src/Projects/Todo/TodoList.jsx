import './Todo.css';
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,checked,onhandleDeleteTodo,onHandleCheckToDo}) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList":"notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => {onHandleCheckToDo(data)}}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onhandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}