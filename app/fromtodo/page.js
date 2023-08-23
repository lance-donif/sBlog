'use client'

import {useState} from 'react'
import { useRouter } from 'next/navigation'

export default function FromTodo() {

    const [todoList, setTodolist] = useState([])
    const [todo, setTodo] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()

    function inputTodo(e) {
        setTodo(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault()

        if (todo.trim() === '') {
            setError(true)
            setTimeout(() => setError(false), 3000)
            return;
        }

        setTodolist(prevList => [...prevList, todo])
        setTodo('')
        // setError(false)
        // router.push('/')
    }

    function removeTodo(index) {
        setTodolist(todoList.filter((todo, i) => i !== parseInt(index.target.value)))
    }


    return (<>
        <form onSubmit={addTodo}>
            <input type="text" placeholder="Add Todo" value={todo} onChange={inputTodo}/>
            <button type="submit">Add</button>
            {error ? <span className='ml-5 text-red-500'>不可以为空</span> : <span></span>}
            <ul>
                {todoList ? (todoList.map((e, index) => (<li key={index}>{e}
                    <button className="bg-green-200 ml-5" onClick={removeTodo} value={index}>remove</button>
                </li>))) : (<li>No Todo</li>)}
            </ul>
        </form>
    </>)
}