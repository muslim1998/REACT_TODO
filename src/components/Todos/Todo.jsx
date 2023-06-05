import React, { useContext } from "react"
import { Task } from '../Task/Task'
import { TodoContext } from "../../App"


export const Todo = ({onDone,onDelete}) => {
    const todos = useContext(TodoContext)
    return <div>
        {todos.map((t,index) => (
            <Task key={index} task={t} index={index} onDelete={onDelete} onDone={onDone} />
        ))}
    </div>
}

export default Todo