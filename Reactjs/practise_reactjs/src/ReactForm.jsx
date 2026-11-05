import { Component } from "react";

class ReactForm extends Component {
    constructor() {
        super()
        //when we combines two classes we need to use super method
        // it extracts extra features or power from the component class to parent class
        //state means entire declared data or values in a component
        // state can be anything bool,arr,null,undefined etc
        // state can be changeble but props cannot be changeable
        this.state = {
            users: {
                fname: "",
                lname: ""
            },
            yesorno: false    //this is also a state

        }
    }
    handleinput = (event) => {
        // console.log(event.target.value);

        const newuser = { ...this.state.users }
        newuser[event.target.name] = event.target.value
        this.setState({ users: newuser })
    }
    handlesubmit = () => {
        console.log(this.state.users);
    }
    render() {
        return <div>
            <form>
                <label htmlFor="">fname</label>
                <input type="text" name="fname" onChange={(event) => { this.handleinput(event) }} value={this.state.fname} /><br />
                <label htmlFor="">lname</label>
                <input type="text" name="lname" onChange={(event) => { this.handleinput(event) }} value={this.state.lname} /><br />
                <button type="button" onClick={this.handlesubmit}>submit</button>
            </form>
        </div>
    }
}
export default ReactForm