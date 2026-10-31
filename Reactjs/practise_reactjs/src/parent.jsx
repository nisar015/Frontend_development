import { Component } from "react";
import Child from './child'
class Parent extends Component{
    constructor(){
        super()
        this.state={
            users:["user1","user2","user3"]
        }
    }
    render(){
        return <div>
            <Child userarr={this.state.users}/>
        </div>
    }
}
export default Parent