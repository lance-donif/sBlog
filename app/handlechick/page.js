'use client'
import {useEffect, useState} from "react";
import hc from "./handlechick.module.css"

export default function HandleChick() {
    const [chick, setChick] = useState(0);

    const [test, setTest] = useState({
        name: '',
        age: '',
    })
    const handleChick = () => {

        console.log(chick)
        setChick(chick + 1);
        setChick(chick + 1);
        console.log(chick)

    }

    const handleChange = (e) => {
        setTest(prev => (
            {
                ...test,
                [e.target.name]: e.target.value,
            }
        ))
    }

    return (<>
        <div className={hc.hcCenter}>
            <div className={hc.hcFont}>
                <button value={chick} onClick={handleChick}>chick me</button>
            </div>
            <p className={hc.hcFont}>{chick ? chick : 0}</p>
            <input className="text-3xl" name="name" type="text" maxLength="5" onChange={handleChange}></input>
            <p className="text-3xl">{test.name}</p>
            <PostBody id={3}/>
        </div>
    </>)
}

export function PostBody({id}) {

    const [text, setText] = useState('')

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{signal:controller.signal})
            .then(res => res.json())
            .then(data => setText(data.body))

return ()=>controller.abort();
    }, [id]);

    return <p>{text}</p>
}
