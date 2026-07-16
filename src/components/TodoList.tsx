import type { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({todos, onCompletedChange, onDelete}: TodoListProps) {
    return (
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo} 
            onCompletedChange={onCompletedChange}/>
          ))}
        </div>
    )
}