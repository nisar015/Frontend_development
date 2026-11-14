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
            filterbycorsename:[],
            totalcoursefee:""
        }
    }
    handleinputchange=(event)=>{
        const inputval={...this.state.newcourse}
        inputval[event.target.name]=event.target.value
        this.setState({newcourse:inputval})
    }
    handlesearchname=(event)=>{
        this.setState({searchbyname:event.target.value})
        const filtered=this.state.Courses.filter((course)=>{
            return course.InstructorName.toLowerCase().includes(this.state.searchbyname.toLowerCase()) || course.CourseName.toLowerCase().includes(this.state.searchbyname.toLowerCase())
        })
        const totfee=this.state.Courses.reduce((a,b)=>{
            return a+b.CourseFee
        },0)
        this.setState({filterbycorsename:filtered})
    }
    render() {
        // const searchbyname = this.state.Tasks.filter((task) => {
        //     return task.TaskTitle.toLowerCase().includes(this.state.searchbytask.toLowerCase())
        // })
        // const filterbystatus=this.state.Tasks.filter((task)=>{
        //     return task.Status=this.state.filterbystat
        // })
        const { CourseID, CourseName, CourseCode, InstructorName, Duration, CourseFee,CourseCat } = this.state.newcourse
        return <div>
            <form>
                <label htmlFor="">Search Course</label>
                <input type="text" placeholder="Search Task here" name="searchbyname" onChange={(event) => { this.handlesearchname(event) }} /><br></br>
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
                    {this.state.filterbycorsename.length > 0 ? this.state.filterbycorsename.map((course, index) => {
                        return <tr key={index}>
                            <td>{course.CourseID}</td>
                            <td>{course.CourseName}</td>
                            <td>{course.CourseCode}</td>
                            <td>{course.InstructorName}</td>
                            <td>{course.Duration}</td>
                            <td>{course.CourseFee}</td>
                            <td>{course.CourseCat}</td>
                            <td><button onClick={() => { this.handledit(course, index) }}>Edit</button></td>
                            <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                        </tr>
                    }) :
                        this.state.Courses.map((course, index) => {
                            return <tr key={index}>
                                <td>{course.CourseID}</td>
                                <td>{course.CourseName}</td>
                                <td>{course.CourseCode}</td>
                                <td>{course.InstructorName}</td>
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