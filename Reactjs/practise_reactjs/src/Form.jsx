import { Component } from "react";

class Form extends Component{
    constructor(){
        super()
        this.state={
            users:[
                {fname:"mike",lname:"nike",email:"mikenike@gmail.com",pnumber:145236789},
                {fname:"nahesh",lname:"kike",email:"aikenike@gmail.com",pnumber:145236789},
                {fname:"gacko",lname:"nske",email:"viike@gmail.com",pnumber:145236789},
                {fname:"bike",lname:"nidse",email:"sdienike@gmail.com",pnumber:145236789}
            ]
        }
    }
    render(){
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>email</th>
                        <th>pnumber</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user)=>{
                        return <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.pnumber}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    }
}
export default Form