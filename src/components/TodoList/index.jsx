import "./style.css"

const TodoList = ({ list, handleTodo }) => {

	return (
		<ul className="list">
			{list.map((item, index) => (
				<li
					key={index}
					className="item"
					style={{
						backgroundColor: index % 2 === 0 ?
							"#fef5c5" : "#ffd0ba"
					}}>

					<p>{item}</p>
					
					<button
						key={index}
						onClick={() => handleTodo(item)}>
						Concluir tarefa
					</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList