import { Component } from "react";
import CRUD from "./CRUD";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            users:
                {
                    fname: "",
                    lname: "",
                    email: "",
                    Mobilenum: ""
                }
            
        }
    }
    handleinputchange = (event) => {
        console.log(event.target.value);
        const inputval = {...this.state.users}
        inputval[event.target.name] = event.target.value;
        this.setState({ users: inputval })
    }
    handlesubmit = () => {
        console.log(this.state.users);

    }
    handlecreateuser=()=>{
        const newuser={
            fname:"",
            lname:"",
            email:"",
            Mobilenum:""
        }
        this.setState({users:newuser})
    }
    render() {
        const {fname,lname,email,Mobilenum}=this.state.users
        return <div>
            <form>
                <label htmlFor="">fname</label>
                <input type="text" name="fname" onChange={(event) => { this.handleinputchange(event) }} value={fname} /> <br />
                <label htmlFor="">lname</label>
                <input type="text" name="lname" onChange={(event) => { this.handleinputchange(event) }} value={lname} /> <br />
                <label htmlFor="">email</label>
                <input type="text" name="email" onChange={(event) => { this.handleinputchange(event) }} value={email} /> <br />
                <label htmlFor="">Mobilenum</label>
                <input type="text" name="Mobilenum" onChange={(event) => { this.handleinputchange(event) }} value={Mobilenum} /> <br />
                <button type="button" onClick={this.handlecreateuser(<CRUD formuser={this.state.users}/>)}>Create User</button>
            </form>
        </div>
    }

}
export default Form