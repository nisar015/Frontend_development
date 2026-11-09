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
    handleinputchange=(event)=>{
        const inputval={...this.state.employee}
        inputval[event.target.name]=event.target.value
        this.setState({employee:inputval})
    }
    handledit=(emp)=>{
        this.setState({employee:emp})
    }
    handledelete=(index)=>{
        const delemp=[...this.state.Employees]
        delemp.splice(index,1)
        this.setState({Employees:delemp})
    }
    handleaddemployee=()=>{
        const newemp=[...this.state.Employees]
        newemp.push(this.state.employee)
        this.setState({Employees:newemp})
    }
    render(){
        const {EmployeeID,EmployeeName,Email,PhoneNumber,Department,Designation,Salary,JoiningDate}=this.state.employee
        return <div>
            <form>
                <label htmlFor="">EmployeeID</label>
                <input type="text" name="EmployeeID" onChange={(event)=>{this.handleinputchange(event)}} value={EmployeeID} /><br></br>
                <label htmlFor="">EmployeeName</label>
                <input type="text" name="EmployeeName" onChange={(event)=>{this.handleinputchange(event)}} value={EmployeeName} /><br></br>
                <label htmlFor="">Email</label>
                <input type="text" name="Email" onChange={(event)=>{this.handleinputchange(event)}} value={Email} /><br></br>
                <label htmlFor="">PhoneNumber</label>
                <input type="text" name="PhoneNumber" onChange={(event)=>{this.handleinputchange(event)}} value={PhoneNumber} /><br></br>
                <label htmlFor="">Department</label>
                <input type="text" name="Department" onChange={(event)=>{this.handleinputchange(event)}} value={Department} /><br></br>
                <label htmlFor="">Designation</label>
                <input type="text" name="Designation" onChange={(event)=>{this.handleinputchange(event)}} value={Designation} /><br></br>
                <label htmlFor="">Salary</label>
                <input type="text" name="Salary" onChange={(event)=>{this.handleinputchange(event)}} value={Salary} /><br></br>
                <label htmlFor="">JoiningDate</label>
                <input type="text" name="JoiningDate" onChange={(event)=>{this.handleinputchange(event)}} value={JoiningDate} /><br></br>
                <button type="button" onClick={()=>{this.handleaddemployee}}>AddEmployee</button>
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
                            <td><button onClick={()=>{this.handledit(emp)}}>Edit</button></td>
                            <td><button onClick={()=>{this.handledelete(index)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}
export default EmployeeManagementSystem