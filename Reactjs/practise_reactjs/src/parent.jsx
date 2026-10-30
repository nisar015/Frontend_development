import { Component } from "react";
import Child from "./child";

class Parent extends Component{
    constructor(){
        super()
        this.state={
            users:["user1","user1","user1","user1"]
        }
    }
    render(){
        return <div>
            <Child usersarr={this.state.users} / >
        </div>
    }
}
export default Parent