import { Component } from "react";
import Child from './child'
class Parent extends Component{
    constructor(){
        super()  
        //when we combines two classes we need to use super method
        // it extracts extra features or power from the component class to parent class
        this.state={
            users:["user1","user2","user3"]   //state means declared values in a component
        }
    }
    render(){
        return <div>
            <Child userarr={this.state.users}/>
        </div>
    }
}
export default Parent