import { Tooltip } from "@mui/material"
import { useState } from "react"
import { SaveTodo } from "services/LocalStorageService"


export function AddTodo(props) {
    const [goal, setGoal] = useState('')
    const createTodo = () => {
        if (goal == null || goal.trim() === '') {
            setGoal('')
            return
        }
        SaveTodo(goal.trim())
        setGoal('')
        props.onTodoAdded()
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            createTodo()
        }
    }

    return (
        <div className="w-100 flex flex-col mt-5">
            <Tooltip title={<span style={{fontSize: '14px'}}>Teendő leírása</span>} placement="top" arrow followCursor={true} className="text-base">
                <input type="text"
                    value={goal}
                    className="h-10 w-full rounded-lg text-black px-3"
                    onChange={e => setGoal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    data-tip data-for='todoTextTooltip'/>
            </Tooltip>
            <input type='button' value='Todo rögzítése' className="mt-2 bg-green-600 h-10 hover:bg-green-500 rounded-lg" onClick={createTodo}/>
        </div>
    )
}