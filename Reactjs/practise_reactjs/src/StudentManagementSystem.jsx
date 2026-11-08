import { Component } from "react";

class StudentManagementSystem extends Component {
    constructor() {
        super()
        this.state = {
            students: [
                { StudentID: 1, FullName: "Rahul Chowdary", Email: "Rahulchowdry@gmail.com", MobileNumber: 1245368883, Department: "CSE", YearOfStudy: 2, Gender: "Male" },
                { StudentID: 2, FullName: "Priya Kumar", Email: "PriyaKumar@gmail.com", MobileNumber: 1245368883, Department: "ECE", YearOfStudy: 3, Gender: "Female" },
                { StudentID: 3, FullName: "Kiran Kumar", Email: "KiranKumar@gmail.com", MobileNumber: 1245368883, Department: "AIML", YearOfStudy: 4, Gender: "Male" },
            ],
            newstudent:{
                StudentID:"",
                FullName:"",
                Email:"",
                MobileNumber:"",
                Department:"",
                YearOfStudy:"",
                Gender:""
            },
            editindex:null
        }
    }
    handleinputchange=(event)=>{
        const inputval={...this.state.newstudent}
        inputval[event.target.name]=event.target.value
        this.setState({newstudent:inputval})
    }
    handlecreatestudent=()=>{
        console.log(this.state.students);
        const newstu=[...this.state.students]
        newstu.push(this.state.newstudent)
        this.setState({students:newstu})

    }
    handleedit=(student,index)=>{
        this.setState({newstudent:student,editindex:index})
    }
    render() {
        const {StudentID,FullName,Email,MobileNumber,Department,YearOfStudy,Gender}=this.state.students
        return <div>
            <form>
                {/* <label htmlFor="">Search Student</label>
                <input type="text" name="searchstudent" onChange={(event)=>{this.handleinputchange(event)}} value={FullName} /><br/> */}
                <label htmlFor="">StudentID</label>
                <input type="text" name="StudentID" onChange={(event)=>{this.handleinputchange(event)}} value={StudentID} /><br/>
                <label htmlFor="">FullName</label>
                <input type="text" name="FullName" onChange={(event)=>{this.handleinputchange(event)}} value={FullName} /><br/>
                <label htmlFor="">Email</label>
                <input type="text" name="Email" onChange={(event)=>{this.handleinputchange(event)}} value={Email} /><br/>
                <label htmlFor="">MobileNumber</label>
                <input type="text" name="MobileNumber" onChange={(event)=>{this.handleinputchange(event)}} value={MobileNumber} /><br/>
                <label htmlFor="">Department</label>
                <input type="text" name="Department" onChange={(event)=>{this.handleinputchange(event)}} value={Department} /><br/>
                <label htmlFor="">YearOfStudy</label>
                <input type="text" name="YearOfStudy" onChange={(event)=>{this.handleinputchange(event)}} value={YearOfStudy} /><br/>
                <label htmlFor="">Gender</label>
                <input type="text" name="Gender" onChange={(event)=>{this.handleinputchange(event)}} value={Gender} /><br/>
                <button type="button" onClick={this.handlecreatestudent}>create student</button>
                <button type="button" onClick={this.handleupdatestudent}>Update Student</button>
            </form>
            <table border={1}>
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
                    {this.state.students.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.StudentID}</td>
                            <td>{student.FullName}</td>
                            <td>{student.Email}</td>
                            <td>{student.MobileNumber}</td>
                            <td>{student.Department}</td>
                            <td>{student.YearOfStudy}</td>
                            <td>{student.Gender}</td>
                            <td>
                                <button onClick={() => { this.handleedit(student,index) }}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => { this.handledelete(index) }}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }

}
export default StudentManagementSystem