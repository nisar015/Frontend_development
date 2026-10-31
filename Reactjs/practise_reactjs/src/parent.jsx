import { Component } from "react";
import Child from './child'
class Parent extends Component{
    constructor(){
        super()  
        //when we combines two classes we need to use super method
        // it extracts extra features or power from the component class to parent class
        this.state={
            users:["user1","user2","user3"] ,  
            //state means declared data or values in a component
            // state can be anything bool,arr,null,undefined etc
            yesorno:false    //this is also a state
        }
    }
    render(){
        return <div>
            <Child userarr={this.state.users}/>
        </div>
    }
}
export default Parent