import { Component } from "react";

class ContactManagementSystem extends Component{
    constructor(){
        super()
        this.state={
            Contacts:[
                {ContactID:11,FullName:"Ravi Basrur",Email:"ravi@gmail.com",PhoneNumber:123456789,Address:"Richmond circle",Company:"company1",ContactType:"Personal"},
                {ContactID:12,FullName:"Priya sharma",Email:"priya@gmail.com",PhoneNumber:123456789,Address:"Richmond circle",Company:"company2",ContactType:"Professional"},
                {ContactID:13,FullName:"John abraham",Email:"john@gmail.com",PhoneNumber:123456789,Address:"Richmond circle",Company:"company3",ContactType:"Personal"},
            ]
        }
    }

}
export default ContactManagementSystem