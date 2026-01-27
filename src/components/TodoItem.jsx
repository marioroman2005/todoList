
export const TodoItem = ({ tarea }) => {

    return(
    <li>
        <span>{tarea.text}</span>
        <button>Eliminar</button>
    </li>
    )
}