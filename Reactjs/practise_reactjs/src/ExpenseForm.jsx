import { Component } from "react";

class ExpenseForm extends Component{
    render(){
        return <div>
            <label htmlFor="">ExpenseID: null,
                ExpenseTitle: "",
                Category: "",
                PaymentMethod: "",
                Date: null,
                Description: </label>
            <input type="ExpenseID" name="ExpenseID"/><br />
            <label htmlFor="">ExpenseTitle</label>
            <input type="ExpenseTitle" name="ExpenseTitle" /><br />
            
            <label htmlFor="">Category</label>
            <input type="Category" name="Category"/><br />
            
            <label htmlFor="">PaymentMethod</label>
            <input type="PaymentMethod" name="PaymentMethod"/><br />
            
            <label htmlFor="">Date</label>
            <input type="Date" name="Date" /><br />
            
            <label htmlFor="">Description</label>
            <input type="Description" name="Description"/><br />
        </div>
    }

}
export default ExpenseForm