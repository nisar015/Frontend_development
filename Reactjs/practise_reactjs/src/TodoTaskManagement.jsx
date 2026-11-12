import { Component } from "react";

class TodoTaskManagement extends Component {
    constructor() {
        super()
        this.state = {
            Tasks: [
                { TaskID: "101", TaskTitle: "Learn React", Description: "this is description", Priority: "High", Status: "InProgress", DueDate: "12-11-2026" },
                { TaskID: "102", TaskTitle: "Complete Assignment", Description: "this is description", Priority: "Medium", Status: "Pending", DueDate: "12-11-2026" },
                { TaskID: "103", TaskTitle: "Practice JavaScript", Description: "this is description", Priority: "Low", Status: "Completed", DueDate: "12-11-2026" },
            ],
            task: {
                TaskID: "",
                TaskTitle: "",
                Description: "",
                Priority: "",
                Status: "",
                DueDate: ""
            },
            editindex: null,
            searchbytask: "",
            filterbystat: ""


        }
    }
    handleinputchange = (event) => {
        const inpval = { ...this.state.task }
        inpval[event.target.name] = event.target.value
        this.setState({ task: inpval })
    }
    handlesearchname = (event) => {
        if (event.target.value.length > 0) {
            this.setState({ searchbytask: event.target.value })
            const searchbyname = this.state.Tasks.filter((task) => {
                return task.TaskTitle.toLowerCase().includes(this.state.searchbytask.toLowerCase()) > 0
            })
            this.setState({ filterbystat: searchbyname })
        } else {
            this.setState({ filterbystat: [] })
        }
    }
    handleinputfilter = (event) => {
        this.setState({ filterbystat: event.target.value })
    }
    handledit = (task, index) => {
        this.setState({ task: task, editindex: index })
    }
    handledelete = (index) => {
        const deltask = [...this.state.Tasks]
        deltask.splice(index, 1)
        this.setState({ Tasks: deltask })
    }
    handleUpdatetask = () => {
        const uptask = [...this.state.Tasks]
        uptask[this.state.editindex] = this.state.task
        this.setState({ Tasks: uptask, editindex: null })
    }
    handleaddtask = () => {
        const addtask = [...this.state.Tasks]
        addtask.push(this.state.task)
        this.setState({ Tasks: addtask })
    }
    render() {

        // const filterbystatus=this.state.Tasks.filter((task)=>{
        //     return task.Status=this.state.filterbystat
        // })
        const { TaskID, TaskTitle, Description, Priority, Status, DueDate } = this.state.task
        return <div>
            <form>
                <label htmlFor="">Search Task</label>
                <input type="text" placeholder="Search Task here" name="TaskTitle" onChange={(event) => { this.handlesearchname(event) }} value={this.state.filterbystat} /><br></br>
                {/* <label htmlFor="">
                    Choose status:
                    <select value={this.state.filterbystat} onChange={(event)=>{this.handleinputfilter(event)}}>
                        <option value="InProgress">InProgress</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label> */}
                <label htmlFor="">TaskID</label>
                <input type="text" name="TaskID" onChange={(event) => { this.handleinputchange(event) }} value={TaskID} /><br></br>
                <label htmlFor="">TaskTitle</label>
                <input type="text" name="TaskTitle" onChange={(event) => { this.handleinputchange(event) }} value={TaskTitle} /><br></br>
                <label htmlFor="">Description</label>
                <input type="text" name="Description" onChange={(event) => { this.handleinputchange(event) }} value={Description} /><br></br>
                <label htmlFor="">Priority</label>
                <input type="text" name="Priority" onChange={(event) => { this.handleinputchange(event) }} value={Priority} /><br></br>
                <label htmlFor="">Status</label>
                <input type="text" name="Status" onChange={(event) => { this.handleinputchange(event) }} value={Status} /><br></br>
                <label htmlFor="">Due Date</label>
                <input type="text" name="DueDate" onChange={(event) => { this.handleinputchange(event) }} value={DueDate} /><br></br>
                {this.state.editindex == null ?
                    <button type="button" onClick={this.handleaddtask}>Add Task</button> :
                    <button type="button" onClick={this.handleUpdatetask}>Update Task</button>}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>TaskID</th>
                        <th>TaskTitle</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.filterbystat.length > 0 ? this.state.filterbystat.map((task, index) => {
                        return <tr key={index}>
                            <td>{task.TaskID}</td>
                            <td>{task.TaskTitle}</td>
                            <td>{task.Description}</td>
                            <td>{task.Priority}</td>
                            <td>{task.Status}</td>
                            <td>{task.DueDate}</td>
                            <td><button onClick={() => { this.handledit(task, index) }}>Edit</button></td>
                            <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                        </tr>
                    }) :
                        this.state.Tasks.map((task, index) => {
                            return <tr key={index}>
                                <td>{task.TaskID}</td>
                                <td>{task.TaskTitle}</td>
                                <td>{task.Description}</td>
                                <td>{task.Priority}</td>
                                <td>{task.Status}</td>
                                <td>{task.DueDate}</td>
                                <td><button onClick={() => { this.handledit(task, index) }}>Edit</button></td>
                                <td><button onClick={() => { this.handledelete(index) }}>Delete</button></td>
                            </tr>
                        })}
                </tbody>
            </table><br />
        </div>
    }
}
export default TodoTaskManagement