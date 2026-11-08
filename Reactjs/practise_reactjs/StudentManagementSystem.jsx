import { Component } from "react";

class StudentManagementSystem extends Component {
    constructor() {
        super()
        this.state = {
            students: [
                { StudentID: 1, FullName: "Rahul Chowdary", Email: "Rahulchowdry@gmail.com", MobileNumber: 1245368883, Department: "CSE", YearOfStudy: 2, Gender: "Male" },
                { StudentID: 2, FullName: "Priya Kumar", Email: "PriyaKumar@gmail.com", MobileNumber: 1245368883, Department: "ECE", YearOfStudy: 3, Gender: "Female" },
                { StudentID: 3, FullName: "Kiran Kumar", Email: "KiranKumar@gmail.com", MobileNumber: 1245368883, Department: "AIML", YearOfStudy: 4, Gender: "Male" },
            ]
        }
    }
    render(){
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>StudentID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>MobileNumber</th>
                        <th>Department</th>
                        <th>YearOfStudy</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map((student,index)=>{
                        return <tr>
                            <td>{student.StudentID}</td>
                            <td>{student.FullName}</td>
                            <td>{student.Email}</td>
                            <td>{student.MobileNumber}</td>
                            <td>{student.Department}</td>
                            <td>{student.YearOfStudy}</td>
                            <td>{student.Gender}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }

}
export default StudentManagementSystem