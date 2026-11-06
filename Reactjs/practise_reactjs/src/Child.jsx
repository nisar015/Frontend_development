import { Component } from "react";

class Child extends Component{
    render(){
        return <div>
            {this.props.userarr.map(function(user){
                return <li>{user}</li>
            })}
        </div>

    }
}
export default Child
