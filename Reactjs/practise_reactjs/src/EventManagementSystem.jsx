import { Component } from "react";

class EventManagementSystem extends Component {
    constructor() {
        super()
        this.state = {
            events: [
                { EventID: 1, EventName: "Tech Fest", Organizer: "name1", EventCategory: "Technical", Location: "Mumbai", EventDate: "18-11-2026", MaxParticipants: 200, RegistrationFee: 1000 },
                { EventID: 2, EventName: "Cultural Day", Organizer: "name2", EventCategory: "Technical", Location: "Hyd", EventDate: "18-11-2026", MaxParticipants: 200, RegistrationFee: 1000 },
                { EventID: 3, EventName: "Hackathon", Organizer: "name3", EventCategory: "Technical", Location: "BNG", EventDate: "18-11-2026", MaxParticipants: 200, RegistrationFee: 1000 },
                { EventID: 4, EventName: "Food Feast", Organizer: "name1", EventCategory: "Technical", Location: "Pune", EventDate: "18-11-2026", MaxParticipants: 200, RegistrationFee: 1000 },
            ],
            newevent: {
                EventID: "",
                EventName: "",
                Organizer: "",
                EventCategory: "",
                Location: "",
                EventDate: "",
                MaxParticipants: "",
                RegistrationFee: ""
            },
            searchbyname:"",
            filterevent:[]
        }

    }
    handlesearchbyname=(e)=>{
        this.setState({searchbyname:e.target.value})
        if(e.target.value.length>0){
            const filterbyname=this.state.events.filter((eve)=>{
                return eve.EventName.toLowerCase().includes(this.state.searchbyname.toLowerCase())
            })
            this.setState({filterevent:filterbyname})
        }
        else{
            this.setState({filterevent:[]})
        }
    }

    render() {
        const { EventName, EventID, Organizer, EventCategory, Location, EventDate, MaxParticipants, RegistrationFee } = this.state.newevent
        return <div>
            <form>
                <label htmlFor="searchbyname">searchbyname</label>
                <input type="text" placeholder="enter evetn name here" name="searchbyname" onChange={(e)=>{this.handlesearchbyname(e)}}/><br />
                <label htmlFor="EventName">EventName</label>
                <input type="text" name="EventName" onChange={(e)=>{this.handleinputchange(e)}} value={EventName} /><br />
                <label htmlFor="EventID">EventID</label>
                <input type="text" name="EventID" onChange={(e)=>{this.handleinputchange(e)}} value={EventID} /><br />
                <label htmlFor="Organizer">EventID</label>
                <input type="text" name="Organizer" onChange={(e)=>{this.handleinputchange(e)}} value={Organizer} /><br />
                <label htmlFor="EventCategory">EventID</label><br />
                <input type="text" name="EventCategory" onChange={(e)=>{this.handleinputchange(e)}} value={EventCategory} /><br />
                <label htmlFor="Location">EventID</label><br />
                <input type="text" name="Location" onChange={(e)=>{this.handleinputchange(e)}} value={Location} /><br />
                <label htmlFor="EventDate">EventID</label><br />
                <input type="text" name="EventDate" onChange={(e)=>{this.handleinputchange(e)}} value={EventDate} /><br />
                <label htmlFor="MaxParticipants">EventID</label><br />
                <input type="text" name="MaxParticipants" onChange={(e)=>{this.handleinputchange(e)}} value={MaxParticipants} /><br />
                <label htmlFor="RegistrationFee">EventID</label><br />
                <input type="text" name="RegistrationFee" onChange={(e)=>{this.handleinputchange(e)}} value={RegistrationFee} /><br />
                {/* <button type="button" onClick={this.handledit()}>Edit</button>
                <button type="button" onClick={this.handledelete()}>Delete</button> */}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>EventID</th>
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
                    {this.state.filterevent.length > 0 ? this.state.filterevent.map((eve, index) => {
                        return <tr key={index}>
                            <td>{eve.EventID}</td>
                            <td>{eve.EventName}</td>
                            <td>{eve.Organizer}</td>
                            <td>{eve.EventCategory}</td>
                            <td>{eve.Location}</td>
                            <td>{eve.EventDate}</td>
                            <td>{eve.MaxParticipants}</td>
                            <td>{eve.RegistrationFee}</td>
                            <td><button onClick={() => { this.handledit(eve, index) }}>Edit</button></td>
                            <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                        </tr>
                    }) :
                        this.state.events.map((eve, index) => {
                            return <tr key={index}>
                                <td>{eve.EventID}</td>
                                <td>{eve.EventName}</td>
                                <td>{eve.Organizer}</td>
                                <td>{eve.EventCategory}</td>
                                <td>{eve.Location}</td>
                                <td>{eve.EventDate}</td>
                                <td>{eve.MaxParticipants}</td>
                                <td>{eve.RegistrationFee}</td>
                                <td><button onClick={() => { this.handledit(eve, index) }}>Edit</button></td>
                                <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                            </tr>
                        })}
                </tbody>
            </table><br />
        </div>
    }
}
export default EventManagementSystem