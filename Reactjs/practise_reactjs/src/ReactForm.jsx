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
    }
    handlesubmit=()=>{

    }
    render(){
        return <div>
            <form>
                <label htmlFor="">fname</label>
                <input type="text" name="fname" onChange={(event)=>{this.handleinput(event)}} value={this.state.fname}/><br />
                <label htmlFor="">lname</label>
                <input type="text" name="lname" /><br />
                <button type="button" onClick={this.handlesubmit}>submit</button>
            </form>
        </div>
    }
}
export default ReactForm