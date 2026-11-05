import { Component } from "react";

class CRUD extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { fname: "nisar",lname: "achukatla",email: "nisar@gmail.com",Mobilenum: 1234567891},
                { fname: "mike",lname: "jackson",email: "jackson@gmail.com",Mobilenum: 1234567891},
                { fname: "john",lname: "carter",email: "carter@gmail.com",Mobilenum: 1234567891},
                { fname: "nikhil",lname: "kamath",email: "kamath@gmail.com",Mobilenum: 1234567891},
            ]
        }
    }
    render() {
        return <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    }
}
export default CRUD