import { Component } from "react";

class EventManagementSystem extends Component{
    constructor(){
        super()
        this.state={
            events:[
                {EventID:1,EventName:"Tech Fest",Organizer:"name1",EventCategory:"Technical",Location:"Mumbai",EventDate:"18-11-2026",MaxParticipants:200,RegistrationFee:1000},
                {EventID:2,EventName:"Cultural Day",Organizer:"name2",EventCategory:"Technical",Location:"Hyd",EventDate:"18-11-2026",MaxParticipants:200,RegistrationFee:1000},
                {EventID:3,EventName:"Hackathon",Organizer:"name3",EventCategory:"Technical",Location:"BNG",EventDate:"18-11-2026",MaxParticipants:200,RegistrationFee:1000},
                {EventID:4,EventName:"Food Feast",Organizer:"name1",EventCategory:"Technical",Location:"Pune",EventDate:"18-11-2026",MaxParticipants:200,RegistrationFee:1000},
            ],
            newevent:{
                EventID:"",
                EventName:"",
                Organizer:"",
                EventCategory:"",
                Location:"",
                EventDate:"",
                MaxParticipants:"",
                RegistrationFee:""
            }
        }
        
    }
    render(){
        const {EventName,EventID,Organizer,EventCategory,Location,EventDate,MaxParticipants,RegistrationFee}=this.state.newevent
        return <div>
            <form>
                <label htmlFor="EventName">EventName</label><br />
                <input type="text" name="EventName" value={EventName}/><br />
                <label htmlFor="EventID">EventID</label><br />
                <input type="text" name="EventID" value={EventID}/><br />
                <label htmlFor="Organizer">EventID</label><br />
                <input type="text" name="Organizer" value={Organizer}/><br />
                <label htmlFor="EventCategory">EventID</label><br />
                <input type="text" name="EventCategory" value={EventCategory}/><br />
                <label htmlFor="Location">EventID</label><br />
                <input type="text" name="Location" value={Location}/><br />
                <label htmlFor="EventDate">EventID</label><br />
                <input type="text" name="EventDate" value={EventDate}/><br />
                <label htmlFor="MaxParticipants">EventID</label><br />
                <input type="text" name="MaxParticipants" value={MaxParticipants}/><br />
                <label htmlFor="RegistrationFee">EventID</label><br />
                <input type="text" name="RegistrationFee" value={RegistrationFee}/><br />
                <button type="button" onClick={this.handledit()}>Edit</button>
                <button type="button" onClick={this.handledelete()}>Delete</button>
            </form>
        </div>
    }
}
export default EventManagementSystem