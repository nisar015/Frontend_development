import { Component } from "react"

class CourseManagementSystem extends Component{
    constructor(){
        super()
        this.state={
            Courses:[
                {CourseID:"10",CourseName:"Reactjs",CourseCode:1,InstructorName:"Murali",Duration:7,CourseFee:40000,CourseCat:"IT"},
                {CourseID:"11",CourseName:"Python",CourseCode:4,InstructorName:"krishna",Duration:7,CourseFee:40000,CourseCat:"IT"},
                {CourseID:"12",CourseName:"Nodejs",CourseCode:5,InstructorName:"Rama",Duration:7,CourseFee:40000,CourseCat:"IT"}
            ],
            newcourse:{
                CourseID:"",
                CourseName:"",
                CourseCode:"",
                InstructorName:"",
                Duration:"",
                CourseFee:"",
                CourseCat:""
            },
            searchbyname:"",
            filterbycorsename:[]
        }
    }
    handleinputchange=(event)=>{
        const inputval={...this.state.newcourse}
        inputval[event.target.name]=event.target.value
        this.setState({newcourse:inputval})
    }
    render() {
        // const searchbyname = this.state.Tasks.filter((task) => {
        //     return task.TaskTitle.toLowerCase().includes(this.state.searchbytask.toLowerCase())
        // })
        // const filterbystatus=this.state.Tasks.filter((task)=>{
        //     return task.Status=this.state.filterbystat
        // })
        const { CourseID, CourseName, CourseCode, InstructorName, Duration, CourseFee,CourseCat } = this.state.task
        return <div>
            <form>
                <label htmlFor="">Search Course</label>
                <input type="text" placeholder="Search Task here" name="TaskTitle" onChange={(event) => { this.handlesearchname(event) }} value={this.state.searchbytask} /><br></br>
                <label htmlFor="">CourseID</label>
                <input type="text" name="CourseID" onChange={(event) => { this.handleinputchange(event) }} value={CourseID} /><br></br>
                <label htmlFor="">CourseName</label>
                <input type="text" name="CourseName" onChange={(event) => { this.handleinputchange(event) }} value={CourseName} /><br></br>
                <label htmlFor="">CourseCode</label>
                <input type="text" name="CourseCode" onChange={(event) => { this.handleinputchange(event) }} value={CourseCode} /><br></br>
                <label htmlFor="">InstructorName</label>
                <input type="text" name="InstructorName" onChange={(event) => { this.handleinputchange(event) }} value={InstructorName} /><br></br>
                <label htmlFor="">Duration</label>
                <input type="text" name="Duration" onChange={(event) => { this.handleinputchange(event) }} value={Duration} /><br></br>
                <label htmlFor="">CourseFee</label>
                <input type="text" name="CourseFee" onChange={(event) => { this.handleinputchange(event) }} value={CourseFee} /><br></br>
                <label htmlFor="">CourseCat</label>
                <input type="text" name="CourseCat" onChange={(event) => { this.handleinputchange(event) }} value={CourseCat} /><br></br>
                {this.state.editindex == null ?
                    <button type="button" onClick={this.handleaddtask}>Add Task</button> :
                    <button type="button" onClick={this.handleUpdatetask}>Update Task</button>}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>CourseID</th>
                        <th>CourseName</th>
                        <th>CourseCode</th>
                        <th>InstructorName</th>
                        <th>Duration</th>
                        <th>CourseFee</th>
                        <th>CourseCat</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {searchbyname.length > 0 ? searchbyname.map((course, index) => {
                        return <tr key={index}>
                            <td>{course.CourseID}</td>
                            <td>{course.CourseName}</td>
                            <td>{course.CourseCode}</td>
                            <td>{course.Duration}</td>
                            <td>{course.CourseFee}</td>
                            <td>{course.CourseCat}</td>
                            <td><button onClick={() => { this.handledit(course, index) }}>Edit</button></td>
                            <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                        </tr>
                    }) :
                        this.state.Tasks.map((course, index) => {
                            return <tr key={index}>
                                <td>{course.CourseID}</td>
                                <td>{course.CourseName}</td>
                                <td>{course.CourseCode}</td>
                                <td>{course.Duration}</td>
                                <td>{course.CourseFee}</td>
                                <td>{course.CourseCat}</td>
                                <td><button onClick={() => { this.handledit(course, index) }}>Edit</button></td>
                                <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                            </tr>
                        })}
                </tbody>
            </table><br />
        </div>
    }
}
export default CourseManagementSystem