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
    handleinputchange=(event)=>{
        console.log(event.target.value);
    }
    render(){
        return <div>
            <form>
                <label htmlFor="fname">fname</label>
                <input type="text" name="fname" onChange={(event)=>{this.handleinputchange(event)}} value={this.state.users.fname} /> <br />
                <label htmlFor="lname">lname</label>
                <input type="text" name="lname" onChange={(event)=>{this.handleinputchange(event)}} value={this.state.users.lname} /> <br />
                <label htmlFor="email">email</label>
                <input type="text" name="email" onChange={(event)=>{this.handleinputchange(event)}} value={this.state.users.email} /> <br />
                <label htmlFor="Mobilenum">Mobilenum</label>
                <input type="text" name="Mobilenum" onChange={(event)=>{this.handleinputchange(event)}} value={this.state.users.Mobilenum} /> <br />
            </form>
        </div>
    }

}
export default Form