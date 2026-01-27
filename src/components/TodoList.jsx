import { TodoItem } from "./TodoItem"

export const TodoList = ({todos}) => {

    return (
        <ul>
            {todos.map((tarea) => (
                <TodoItem key={tarea.id} tarea={tarea}/>
            ))}
        </ul>
    )
}