import { Component } from "react";

class child extends Component{
    render(){
        return <div>
            {this.props.user.map(function(use){
                return <li>{use}</li>
            })}
        </div>
    }
}
export default child