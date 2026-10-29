import { Component } from "react";

class child extends Component {
    render() {
        console.log(this.props);
        return <div>
            <h2>You are in child Component</h2>
            <ul>
                {this.props.user.map(function (use) {
                    console.log(use);
                })}

            </ul>
        </div>
    }
}
export default child