import { Component} from "react";
import './Crud.css'
class CRUD extends Component {
    constructor() {
        super()
        // this means the state is belong to this component
        this.state = {
            users: [
                { fname: "nisar",lname: "achukatla",email: "nisar@gmail.com",Mobilenum: 1234567891},
                { fname: "mike",lname: "jackson",email: "jackson@gmail.com",Mobilenum: 1234567891},
                { fname: "john",lname: "carter",email: "carter@gmail.com",Mobilenum: 1234567891},
                { fname: "nikhil",lname: "kamath",email: "kamath@gmail.com",Mobilenum: 1234567891},
            ]
        }
    }
    handledelete=(user)=>{
        const newuser=this.state.users.filter((use)=>{
            return use.email != user.email
        })
        console.log(newuser);
    }
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>email</th>
                        <th>mobile num</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.Mobilenum}</td>
                            <td><button onClick={()=>{this.handledelete(user,index)}}>delete</button></td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}
export default CRUD