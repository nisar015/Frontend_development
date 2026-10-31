// a file can have multiple components
//because this is exported without default they are imported  in brackets in App.jsx
// default exported component name can be imported with any name in App.jsx
// useState is called hook 
import { useState } from "react"

// each can only able to return only one element
export function FuncComp(){  
    // here we are changing the referrence of message
    // 1.message is deleted
    // 2.new var is declared 
    // 3.the new value is assigned to the new var
    // that is all handled by react useState
    const [message,setmessage]=useState("this is a variable;")  
    const [user,setuser]=useState(
        {
            fname:"nisar",
            lname:"ahmmed"
        }
    )  
    
    return <>
    <button onClick={()=>{setmessage("this is chnaged message")}}>button</button>
    <button onClick={()=>{setuser({fname:"name",lname:"lastname"})}}>button</button>
    <h2>this is a functional component</h2>
            <h2>{message}</h2>
            <li>{user.fname}</li>
            <li>{user.lname}</li>
    </> 
}
export function FuncComp1(){
    const [allusers]=useState("user1","user2","user3")  
    return <>
    <h2>this is a functional component</h2>
    <ul>
        {allusers.map((user)=>{
            return <li>{user}</li>
        })}
    </ul>
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