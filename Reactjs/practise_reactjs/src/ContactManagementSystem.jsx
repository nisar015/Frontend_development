import { Component } from "react";

class ContactManagementSystem extends Component {
    constructor() {
        super()
        this.state = {
            Contacts: [
                { ContactID: 11, FullName: "Ravi Basrur", Email: "ravi@gmail.com", PhoneNumber: 123456789, Address: "Richmond circle", Company: "company1", ContactType: "Personal" },
                { ContactID: 12, FullName: "Priya sharma", Email: "priya@gmail.com", PhoneNumber: 123456789, Address: "Richmond circle", Company: "company2", ContactType: "Professional" },
                { ContactID: 13, FullName: "John abraham", Email: "john@gmail.com", PhoneNumber: 123456789, Address: "Richmond circle", Company: "company3", ContactType: "Personal" },
            ],
            newcontact: {
                ContactID: "",
                FullName: "",
                Email: "",
                PhoneNumber: "",
                Address: "",
                Company: "",
                ContactType: ""
            },
            searchbyname: "",
            searchbypn: "",
            filterbycontype: ""
        }
    }
    handleinputchange=(event)=>{
        const inputval={...this.state.newcontact}
        inputval[event.target.name]=event.target.value
        this.setState({newcontact:inputval})
    }
    handlesearchname=(event)=>{
        this.setState({searchbyname:event.target.value})
    }
    handleinputfilter=(event)=>{
        this.setState({filterbycontype:event.target.value})
    }
    handledelete=(index)=>{
        const delcontact=[...this.state.Contacts]
        delcontact.splice(index,1)
        this.setState({Contacts:delcontact})
    }
    render() {
        const searchbyname = this.state.Contacts.filter((con) => {
            return con.FullName.toLowerCase().includes(this.state.searchbyname.toLowerCase())
        })
        // const filterbycontacttype = this.state.Contacts.filter((con) => {
        //     return con.ContactType = this.state.filterbycontype
        // })
        const { 
            ContactID,
            FullName,
            Email,
            PhoneNumb,
            Address,
            Company, ContactType } = this.state.newcontact
        return <div>
            <form>
                <label htmlFor="">Search Task</label>
                <input type="text" placeholder="Search Task here" name="TaskTitle" onChange={(event) => { this.handlesearchname(event) }} value={this.state.searchbytask} /><br></br>
                <label htmlFor="">
                    Choose status:
                    <select value={this.state.filterbycontype} onChange={(event) => { this.handleinputfilter(event) }}>
                        <option value="Personal">Personal</option>
                        <option value="Professional">Professional</option>
                    </select>
                </label><br />
                <label htmlFor="">ContactID</label>
                <input type="text" name="ContactID" onChange={(event) => { this.handleinputchange(event) }} value={ContactID} /><br></br>
                <label htmlFor="">FullName</label>
                <input type="text" name="FullName" onChange={(event) => { this.handleinputchange(event) }} value={FullName} /><br></br>
                <label htmlFor="">Email</label>
                <input type="text" name="Email" onChange={(event) => { this.handleinputchange(event) }} value={Email} /><br></br>
                <label htmlFor="">PhoneNumb</label>
                <input type="text" name="PhoneNumb" onChange={(event) => { this.handleinputchange(event) }} value={PhoneNumb} /><br></br>
                <label htmlFor="">Address</label>
                <input type="text" name="Address" onChange={(event) => { this.handleinputchange(event) }} value={Address} /><br></br>
                <label htmlFor="">Company</label>
                <input type="text" name="Company" onChange={(event) => { this.handleinputchange(event) }} value={Company} /><br></br>
                <label htmlFor="">ContactType</label>
                <input type="text" name="ContactType" onChange={(event) => { this.handleinputchange(event) }} value={ContactType} /><br></br>
                {this.state.editindex == null ?
                    <button type="button" onClick={this.handleaddtask}>Add Task</button> :
                    <button type="button" onClick={this.handleUpdatetask}>Update Task</button>}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ContactID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>PhoneNumb</th>
                        <th>Address</th>
                        <th>ContactType</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {searchbyname.length > 0 ? searchbyname.map((con, index) => {
                        return <tr key={index}>
                            <td>{con.ContactID}</td>
                            <td>{con.FullName}</td>
                            <td>{con.Email}</td>
                            <td>{con.PhoneNumber}</td>
                            <td>{con.Address}</td>
                            <td>{con.ContactType}</td>
                            <td><button onClick={() => { this.handledit(con, index) }}>Edit</button></td>
                            <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                        </tr>
                    }) :
                        this.state.Contacts.map((con, index) => {
                            return <tr key={index}>
                                <td>{con.ContactID}</td>
                                <td>{con.FullName}</td>
                                <td>{con.Email}</td>
                                <td>{con.PhoneNumber}</td>
                                <td>{con.Address}</td>
                                <td>{con.ContactType}</td>
                                <td><button onClick={() => { this.handledit(con, index) }}>Edit</button></td>
                                <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                            </tr>
                        })}
                </tbody>
            </table><br />
        </div>
    }
}


export default ContactManagementSystem