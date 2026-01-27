import { useState } from "react"

export const TodoForm = ({onAdd}) => {
    const [valorInput, setValorInput] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        if (valorInput.trim() !== "") {
            onAdd(valorInput); 
            setValorInput(""); 
    }
    }
    return (
        <>

            <form onSubmit={manejarEnvio}>
                <input 
                    type="text"
                    className="tl-tf-input"
                    value={valorInput}
                    onChange={(e) => setValorInput(e.target.value)}
                    placeholder="Escribe una tarea"
                />
                <button type="submit" className="tl-tf-button-add">Add</button>
            </form>
            
        </>
    )
}