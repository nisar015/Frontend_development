import { Component } from "react";

class ExpenseForm extends Component {
    render() {
        const {ExpenseID,ExpenseTitle,Category,PaymentMethod,Date,Description}=this.props.varnewExpense
        return <div>
            <label htmlFor="">ExpenseID</label>
            <input type="text" name="ExpenseID" onChange={(e)=>{this.props.varhandlechange(e)}} value={ExpenseID}/><br />
            <label htmlFor="">ExpenseTitle</label>
            <input type="text" name="ExpenseTitle" onChange={(e)=>{this.props.varhandlechange(e)}} value={ExpenseTitle}/><br />

            <label htmlFor="">Category</label>
            <input type="text" name="Category" onChange={(e)=>{this.props.varhandlechange(e)}} value={Category}/><br />

            <label htmlFor="">PaymentMethod</label>
            <input type="text" name="PaymentMethod" onChange={(e)=>{this.props.varhandlechange(e)}} value={PaymentMethod}/><br />

            <label htmlFor="">Date</label>
            <input type="text" name="Date" onChange={(e)=>{this.props.varhandlechange(e)}} value={Date}/><br />

            <label htmlFor="">Description</label>
            <input type="text" name="Description" onChange={(e)=>{this.props.varhandlechange(e)}} value={Description}/><br />
        </div>
    }

}
export default ExpenseForm