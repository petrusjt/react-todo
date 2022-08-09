import { useState } from "react"
import { MarkTodoDone } from "services/LocalStorageService"


export function TodoItem(props) {
    const goal = props.currentTodo.goal
    const [completed, setCompleted] = useState(props.currentTodo.completed)

    const handleTodoDone = (e) => {
        setCompleted(e.target.value)
        MarkTodoDone(goal)
    }

    return (
        <div className={`shadow-md shadow-gray-900 rounded-lg bg-slate-500 px-1 py-2 my-2 flex justify-between w-full ${completed ? 'bg-green-500' : 'bg-yellow-500'}`}>
            <div className={`card-body px-2 ${completed ? 'w-full' : 'w-11/12'}`}>
                {goal}
            </div>
            {completed ? '' : (
                <div className="w-1/12">
                    <input type="checkbox" className="h-full w-auto" onChange={handleTodoDone}/>
                </div>)}
        </div>
    )
}