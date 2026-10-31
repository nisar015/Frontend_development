import { Component } from "react";
import '../src/Form.css'
class Form extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { fname: "mike", lname: "nike", email: "mikenike@gmail.com", pnumber: 145236789 },
                { fname: "nahesh", lname: "kike", email: "aikenike@gmail.com", pnumber: 145236789 },
                { fname: "gacko", lname: "nske", email: "viike@gmail.com", pnumber: 145236789 },
                { fname: "bike", lname: "nidse", email: "sdienike@gmail.com", pnumber: 145236789 }
            ]
        }
    }
    handledelete=(index)=>{
        // console.log(user);
        // const newuser=this.state.users.filter((use)=>{
        //     return use.email !== user.email
        // })
        // this.setState({users:newuser})
        const newuser=[...this.state.users]
        newuser.splice(index,1)
        this.setState({users:newuser})

    }
    render() {
        return <div>
            <table border={1}>
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
                    {this.state.users.map((user,index) => {
                        return <tr key={index}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.pnumber}</td>
                            <td>
                                <button onClick={()=>{this.handledelete(index)}}>delete</button>

                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    }
}
export default Form