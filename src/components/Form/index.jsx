import "./style.css"
import { useState } from "react"

const Form = ({ addTodo }) => {

	const [input, setInput] = useState("")

	return (
		<form>
			<input
				placeholder="Tarefa"
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>

			<button
				className="add"
				type="button"
				onClick={() => addTodo(input)}>
				Adicionar tarefa
			</button>
		</form>
	)
}

export default Form