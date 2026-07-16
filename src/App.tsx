import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  const [todos, setTodos] = useState(dummyData);


  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => prevTodos.map(
      todo => (todo.id == id) ? {...todo, completed} : todo
    ))
  } 

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">나의 일정</h1>
      <div className="max-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map(todos => (
            <TodoItem 
            key={todos.id}
            todo={todos} 
            onCompletedChange={setTodoCompleted}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
