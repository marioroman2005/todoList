import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, onDelete, onToggle }) => {

    return (
        <ul>
            {todos.map((tarea) => (
                <TodoItem 
                    key={tarea.id} 
                    tarea={tarea}
                    onDelete={onDelete} //Le pasamos la prop al hijo
                    onToggle={onToggle}
                />
            ))}
        </ul>
    )
}