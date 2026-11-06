import { Component } from "react";

class Form extends Component{
    constructor(){
        super()
        this.state={
            users:[
                {
                    fname:"",
                    lname:"",
                    email:"",
                    Mobilenum:""
                }
            ]
        }
    }
    render(){
        return <div>
            <form>
                <label htmlFor="fname">fname</label>
                <input type="text" name="fname" value={this.state.users.fname} /> <br />
                <label htmlFor="lname">lname</label>
                <input type="text" name="lname" value={this.state.users.lname} /> <br />
                <label htmlFor="email">email</label>
                <input type="text" name="email" value={this.state.users.email} /> <br />
                <label htmlFor="fname">fname</label>
                <input type="text" name="fname" value={this.state.users.fname} /> <br />
                <label htmlFor="fname">fname</label>
                <input type="text" name="fname" value={this.state.users.fname} /> <br />
            </form>
        </div>
    }

}
export default Form