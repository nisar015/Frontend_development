import { Component } from "react";

class TodoTaskManagement extends Component {
    constructor() {
        super()
        this.state = {
            Tasks:[
                {TaskID:"101",TaskTitle:"Learn React",Description:"this is description",Priority:"High",Status:"In Progress",DueDate:"12-11-2026"},
                {TaskID:"102",TaskTitle:"Complete Assignment",Description:"this is description",Priority:"Medium",Status:"Pending",DueDate:"12-11-2026"},
                {TaskID:"103",TaskTitle:"Practice JavaScript",Description:"this is description",Priority:"Low",Status:"Completed",DueDate:"12-11-2026"},
            ],
            editindex:null


        }
    }
    render() {
        return <div>
            <form>
                <label htmlFor="">Search Task</label>
                <input type="text" placeholder="Search Task here" name="EmployeeName" onChange={(event) => { this.handlesearchname(event) }} value={this.state.searchempbyname} /><br></br>
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
                {editindex == null ?
                    <button type="button" onClick={this.handleaddtask}>Add Task</button> :
                    <button type="button" onClick={this.handleaddtask}>Add Task</button>}
            </form>
        </div>
    }
}
export default TodoTaskManagement