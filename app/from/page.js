'use client'
import {useState} from 'react';

import from from "./from.module.css";

export default function FromTable() {


    // 1、判断输入的内容格式
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [submit, setSubmit] = useState(false)
    // 2、判断输入的内容长度
    // 3、判断密码是否一致

function addEmail(e) {
        setEmail(e.target.value)
    }

    function addPassword(e) {
        setPassword(e.target.value)
    }

    function addConfirmPassword(e) {
        setConfirmPassword(e.target.value)
    }
    function  handleSubmit(e) {
        e.preventDefault();
        setSubmit(true)
        // 模拟请求服务器提交数据
        fetch('').then(r =>r.text() )
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setTimeout(() => setSubmit(false), 3000)


    }
    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className={from.div}><input value={email} onChange={addEmail} type="email" placeholder="email"/></div>
                <div className={from.div}><input value={password} onChange={addPassword} type="password" placeholder="password"/></div>
                <div className={from.div}><input value={confirmPassword} onChange={addConfirmPassword} type="confimPassword" placeholder="confimPassword"/></div>
                <div>
                    <button type="submit" disabled={submit} className={submit ?"bg-red-700":"bg-green-200"} >submit</button>
                </div>
            </form>
        </>
    )

}