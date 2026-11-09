import { Component } from "react";

class EmployeeManagementSystem extends Component {
    constructor() {
        super()
        this.state = {
            Employees: [
                { EmployeeID: 101, EmployeeName: "Murali", Email: "murali@gmail.com", PhoneNumber: 123456789, Department: "IT", Designation: "Developer", Salary: "40LPA", JoiningDate: "15-2-2010" },
                { EmployeeID: 102, EmployeeName: "Sneha", Email: "sneha@gmail.com", PhoneNumber: 145656789, Department: "HR", Designation: "Manager", Salary: "30LPA", JoiningDate: "15-2-2012" },
                { EmployeeID: 103, EmployeeName: "Arjun", Email: "arjun@gmail.com", PhoneNumber: 178956789, Department: "Sales", Designation: "Executive", Salary: "25LPA", JoiningDate: "15-2-2016" },
            ]
        }
    }
    render(){
        return <div>
            <table>
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
            </table>
        </div>
    }
}
export default EmployeeManagementSystem