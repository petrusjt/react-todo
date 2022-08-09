import { Lister } from './lister/Lister'
import { AddTodo } from './addtodo/AddTodo'
import { useState } from 'react'
import { GetTodos } from 'services/LocalStorageService'

export function TodoList() {
    const [todos, setTodos] = useState(GetTodos())

    const handleTodoAdded = () => {
        setTodos(GetTodos())
    }

    return (
        <div className='w-full lg:w-1/2 bg-slate-700 p-3 h-full flex flex-col justify-between rounded-lg shadow-lg shadow-slate-900'>
            <Lister todoList={todos} />
            <AddTodo onTodoAdded={handleTodoAdded}/>
        </div>
    )
}