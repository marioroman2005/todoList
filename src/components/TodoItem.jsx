
export const TodoItem = ({ tarea, onDelete, onToggle }) => {

    return (
        <li>
            <input
                type="checkbox"
                checked={tarea.completed}
                onChange={() => onToggle(tarea.id)}
            />
            <span className={`todo-text ${tarea.completed ? "completed" : ""}`}>
                {tarea.text}
            </span>

            <button className="delete-btn" onClick={() => onDelete(tarea.id)}>
                Eliminar
            </button>
        </li>
    )
}