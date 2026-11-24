import { Component } from "react";
import ExpenseTrackerTable from './ExpenseTrackerTable'
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
    render(){
        return <div>
            <ExpenseTrackerTable expensedata={this.state.Expenses}/>
        </div>
    }
}
export default ExpenseTracker