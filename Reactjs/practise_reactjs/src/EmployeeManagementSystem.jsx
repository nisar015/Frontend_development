import { Component } from "react";
class EmployeeManagementSystem extends Component {
    constructor() {
        super()
        this.state = {
            Employees: [
                { EmployeeID: 101, EmployeeName: "Murali", Email: "murali@gmail.com", PhoneNumber: 123456789, Department: "IT", Designation: "Developer", Salary: "40LPA", JoiningDate: "15-2-2010" },
                { EmployeeID: 102, EmployeeName: "Sneha", Email: "sneha@gmail.com", PhoneNumber: 145656789, Department: "HR", Designation: "Manager", Salary: "30LPA", JoiningDate: "15-2-2012" },
                { EmployeeID: 103, EmployeeName: "Arjun", Email: "arjun@gmail.com", PhoneNumber: 178956789, Department: "Sales", Designation: "Executive", Salary: "25LPA", JoiningDate: "15-2-2016" },
            ],
            employee:{
                EmployeeID:"",
                EmployeeName:"",
                Email:"",
                PhoneNumber:"",
                Department:"",
                Designation:"",
                Salary:"",
                JoiningDate:""
            }
        }
    }
    handledit=()=>{
        const 
    }
    handledelete=(index)=>{
        const delemp=[...this.state.Employees]
        delemp.splice(index,1)
        this.setState({Employees:delemp})
    }
    render(){
        return <div>
            <form>
                <label htmlFor="">EmployeeID</label>
                <input type="text" name="EmployeeID" onChange={()=>{}} value={this.state.} />
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>EmployeeID</th>
                        <th>EmployeeName</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>JoiningDate</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Employees.map((emp,index)=>{
                        return <tr key={index}>
                            <td>{emp.EmployeeID}</td>
                            <td>{emp.EmployeeName}</td>
                            <td>{emp.Email}</td>
                            <td>{emp.PhoneNumber}</td>
                            <td>{emp.Department}</td>
                            <td>{emp.Designation}</td>
                            <td>{emp.Salary}</td>
                            <td>{emp.JoiningDate}</td>
                            <td><button onClick={()=>{this.handledit()}}>Edit</button></td>
                            <td><button onClick={()=>{this.handledelete(index)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}
export default EmployeeManagementSystem