import TodoList from "./components/TodoList"
import Form from "./components/Form"
import { useState } from "react"
import './App.css'

function App() {

  const [list, setList] = useState([])

  const addTodo = (newTodo) => {
    setList([...list, newTodo])
  }

  const handleTodo = remove => setList(list.filter(item => item !== remove))

  return (
    <div className="App">
      <div className="App-header">
        <h1>Lista de Tarefas</h1>
        <Form addTodo={addTodo} />
        <TodoList
          list={list}
          handleTodo={handleTodo}
        />
      </div>
    </div>
  )
}

export default App