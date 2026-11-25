import { Component } from "react";
import ExpenseTrackerTable from './ExpenseTrackerTable'
import ExpenseForm from "./ExpenseForm";
class ExpenseTracker extends Component {
    constructor() {
        super()
        this.state = {
            Expenses: [
                { ExpenseID: 1, ExpenseTitle: "Food", Category: "Groceries",Amount:1500, PaymentMethod: "Cash", Date: 12 / 15 / 2023, Description: "desc" },
                { ExpenseID: 2, ExpenseTitle: "Travel", Category: "Petrol", Amount:2000,PaymentMethod: "Card", Date: 12 / 15 / 2023, Description: "desc" },
                { ExpenseID: 3, ExpenseTitle: "Bills", Category: "Internet",Amount:999, PaymentMethod: "UPI", Date: 12 / 15 / 2023, Description: "desc" },
                { ExpenseID: 8, ExpenseTitle: "Lunch", Category: "Dining", Amount:500,PaymentMethod: "UPI", Date: 12 / 15 / 2023, Description: "desc" },
            ],
            newExpense: {
                ExpenseID: null,
                ExpenseTitle: "",
                Category: "",
                PaymentMethod: "",
                Date: null,
                Description: ""
            }
        }
    }
    handleDelete=(index)=>{
        const newexpense=[...this.state.Expenses]
        newexpense.splice(index,1)
        this.setState({Expenses:newexpense})
    }
    handleinputchange=(e)=>{
        const newExpense={...this.state.newExpense}
        newExpense[e.target.name]=e.target.value
        this.setState({newExpense:newExpense})
    }
    render(){
        return <div>
            <ExpenseForm varhandlechange={this.handleinputchange}/>
            <ExpenseTrackerTable expensedata={this.state.Expenses} vardel={this.handleDelete}/>
        </div>

    }
}
export default ExpenseTracker