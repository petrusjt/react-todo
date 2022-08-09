import { Todo } from "models/Todo"


export function GetTodos() {
    const todos = localStorage.getItem("todos")
    return todos ? JSON.parse(todos) : []
}

export function SaveTodo(goal) {
    const todos = localStorage.getItem("todos")
    const existingTodos = todos ? JSON.parse(todos) : null
    console.log(existingTodos)
    if (existingTodos === null) {
        localStorage.setItem("todos", JSON.stringify([new Todo(goal)]))
        return
    }
    existingTodos.push(new Todo(goal))
    localStorage.setItem("todos", JSON.stringify(existingTodos))
}

export function MarkTodoDone(goal) {
    const todos = localStorage.getItem("todos")
    const existingTodos = JSON.parse(todos)
    const recentlyDoneTodoIndex = existingTodos.findIndex((item) => item.goal === goal)
    existingTodos[recentlyDoneTodoIndex].completed = true
    localStorage.setItem("todos", JSON.stringify(existingTodos))
}