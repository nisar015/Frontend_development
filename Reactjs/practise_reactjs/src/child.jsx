
import { Component } from "react";

class Child extends Component {
    render() {
        console.log(this.props);

        return <div>
                <h2>You are in Child Component</h2>

                <ul>
                    {this.props.usersarr.map(function (user) {
                        return <li key={user}>{user}</li>;
                    })}
                </ul>
            </div>
    }
}

export default Child;
