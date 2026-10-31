// a file can have multiple components
//because this is exported without default they are imported  in brackets in App.jsx
export function FuncComp(){                                
    return <h2>this is a functional component</h2>
}
export function FuncComp1(){
    return <h2>this is a functional component</h2>
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