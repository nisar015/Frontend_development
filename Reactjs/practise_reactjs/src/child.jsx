import { Component } from "react";

class Child extends Component {
    render() {
        return <div>
            <ul>
                {this.props.usersarr.map(function (user) {
                    return <li>{user}</li>
                })}

            </ul>
        </div>
    }
}
export default Child