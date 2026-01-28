
export const TodoItem = ({ tarea, onDelete }) => {

    return(
    <li>
        <span>{tarea.text}</span>
        <input type="checkbox" />
        <button onClick={() => onDelete(tarea.id)}>
            Eliminar
        </button>
    </li>
    )
}