import { Component } from "react";

class child extends Component{
    render(){
        return <div>
            {this.props.user.map()}
        </div>
    }
}
export default child