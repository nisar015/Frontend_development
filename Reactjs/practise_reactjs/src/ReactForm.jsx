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
        console.log(event.target.value);
        const newuser=[...this.state.users]
        newuser[event.target.name]=event.target.value
        this.setState({users:newuser})
    }
    handlesubmit=()=>{
        console.log(this.state.users);
    }
    render(){
        return <div>
            <form>
                <label htmlFor="">fname</label>
                <input type="text" name="fname" onChange={(event)=>{this.handleinput(event)}} value={this.state.fname}/><br />
                <label htmlFor="">lname</label>
                <input type="text" name="lname" onChange={(event)=>{this.handleinput(event)}} value={this.state.fname} /><br />
                <button type="button" onClick={this.handlesubmit}>submit</button>
            </form>
        </div>
    }
}
export default ReactForm