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
            </form>
        </div>
    }

}
export default Form