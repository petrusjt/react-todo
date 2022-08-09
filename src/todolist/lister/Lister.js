import { TodoItem } from './todoitem/TodoItem'
import './Lister.css'

export function Lister(props) {
    console.log([...props.todoList].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)))
    return (
        <div className='p-2 overflow-y-auto scroll-smooth'>
            {[...props.todoList].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)).map((todo, index) => <TodoItem key={todo.createdDate} currentTodo={todo} />)}
        </div>
    )
}