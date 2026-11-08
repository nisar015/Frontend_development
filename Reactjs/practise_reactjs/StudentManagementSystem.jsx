import { Component } from "react";

class StudentManagementSystem extends Component{
    constructor(){
        super()
        this.state={
            students:[
                {StudentID:1,FullName:"Rahul Chowdary",Email:"Rahulchowdry@gmail.com",MobileNumber:1245368883,Department:"CSE",YearOfStudy:2,Gender:"Male"},
                {StudentID:2,FullName:"Rahul Chowdary",Email:"Rahulchowdry@gmail.com",MobileNumber:1245368883,Department:"CSE",YearOfStudy:2,Gender:"Male"},
                {StudentID:3,FullName:"Rahul Chowdary",Email:"Rahulchowdry@gmail.com",MobileNumber:1245368883,Department:"CSE",YearOfStudy:2,Gender:"Male"},
            ]
        }
    }

}
export default StudentManagementSystem