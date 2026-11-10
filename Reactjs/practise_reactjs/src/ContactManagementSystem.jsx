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
    render() {
        const searchbyname = this.state.Contacts.filter((con) => {
            return con.FullName.toLowerCase().includes(this.state.searchbyname.toLowerCase())
        })
        // const filterbycontacttype = this.state.Contacts.filter((con) => {
        //     return con.ContactType = this.state.filterbycontype
        // })
        const { ContactID,
            FullName,
            Email,
            PhoneNumb,
            Address,
            Company, ContactType } = this.state.Contact
        return <div>
            <form>
                <label htmlFor="">Search Task</label>
                <input type="text" placeholder="Search Task here" name="TaskTitle" onChange={(event) => { this.handlesearchname(event) }} value={this.state.searchbytask} /><br></br>
                <label htmlFor="">
                    Choose status:
                    <select value={this.state.filterbystat} onChange={(event) => { this.handleinputfilter(event) }}></select>
                </label>
                <label htmlFor="">TaskID</label>
                <input type="text" name="TaskID" onChange={(event) => { this.handleinputchange(event) }} value={TaskID} /><br></br>
                <label htmlFor="">TaskTitle</label>
                <input type="text" name="TaskTitle" onChange={(event) => { this.handleinputchange(event) }} value={TaskTitle} /><br></br>
                <label htmlFor="">Description</label>
                <input type="text" name="Description" onChange={(event) => { this.handleinputchange(event) }} value={Description} /><br></br>
                <label htmlFor="">Priority</label>
                <input type="text" name="Priority" onChange={(event) => { this.handleinputchange(event) }} value={Priority} /><br></br>
                <label htmlFor="">Status</label>
                <input type="text" name="Status" onChange={(event) => { this.handleinputchange(event) }} value={Status} /><br></br>
                <label htmlFor="">Due Date</label>
                <input type="text" name="DueDate" onChange={(event) => { this.handleinputchange(event) }} value={DueDate} /><br></br>
                {this.state.editindex == null ?
                    <button type="button" onClick={this.handleaddtask}>Add Task</button> :
                    <button type="button" onClick={this.handleUpdatetask}>Update Task</button>}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>TaskID</th>
                        <th>TaskTitle</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {searchbyname.length > 0 ? searchbyname.map((task, index) => {
                        return <tr key={index}>
                            <td>{task.TaskID}</td>
                            <td>{task.TaskTitle}</td>
                            <td>{task.Description}</td>
                            <td>{task.Priority}</td>
                            <td>{task.Status}</td>
                            <td>{task.DueDate}</td>
                            <td><button onClick={() => { this.handledit(task, index) }}>Edit</button></td>
                            <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                        </tr>
                    }) :
                        this.state.Tasks.map((task, index) => {
                            return <tr key={index}>
                                <td>{task.TaskID}</td>
                                <td>{task.TaskTitle}</td>
                                <td>{task.Description}</td>
                                <td>{task.Priority}</td>
                                <td>{task.Status}</td>
                                <td>{task.DueDate}</td>
                                <td><button onClick={() => { this.handledit(task, index) }}>Edit</button></td>
                                <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                            </tr>
                        })}
                </tbody>
            </table><br />
        </div>
    }
}


export default ContactManagementSystem