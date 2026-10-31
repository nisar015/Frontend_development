// a file can have multiple components
//because this is exported without default they are imported  in brackets in App.jsx
// default exported component name can be imported with any name in App.jsx

import { useState } from "react"

// each can only able to return only one element
export function FuncComp(){  
    const [message,setmessage]=useState("this is a variable;")                              
    return <>
    <button onClick={()=>{setmessage("this is chnaged message")}}></button>
    <h2>this is a functional component</h2>
            <h2>{message}</h2>
    </> 
}
export function FuncComp1(){
    return <>
    <h2>this is a functional component</h2>
    </>
}
export function FuncComp2(){
    return <h2>this is a functional component</h2>
}
export function FuncComp3(){
    return <h2>this is a functional component</h2>
}

export default function FunComponent(){
    return <h1>this is an export default function</h1>
}