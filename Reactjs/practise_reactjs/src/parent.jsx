import { Component } from "react";
import Child from "./child";

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            users: ["user1", "user2", "user3", "user4"],
            bool: false
        }
    }
    render() {
        return (
            <div>
                <h2>This is Parent Component</h2>
                <Child userarr={this.state.users} />
            </div>
        )

    }
}
export default Parent