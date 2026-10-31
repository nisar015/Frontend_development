import { Component } from "react";

class ReactForm extends Component{
    constructor(){
        super()
        this.state={
            users:[
                {
                    fname:"",
                    lname:""
                }
            ]
        }
    }
    handleinput=(event)=>{
        console.log(event);
    }
    render(){
        return <div>
            <form>
                <label htmlFor="">fname</label>
                <input type="text" onChange={(event)=>{this.handleinput(event)}} value={this.state.users.fname}/><br />
                <label htmlFor="">lname</label>
                <input type="text" /><br />
                <button type="button">submit</button>
            </form>
        </div>
    }
}
export default ReactForm