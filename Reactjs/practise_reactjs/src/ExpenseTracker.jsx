import { Component } from "react";
import ExpenseTrackerTable from './ExpenseTrackerTable'
class ExpenseTracker extends Component {
    constructor() {
        super()
        this.state = {
            Expenses: [
                { ExpenseID: 1, ExpenseTitle: "Food", Category: "Groceries", PaymentMethod: "Cash", Date: 12 / 15 / 2023, Description: "desc" },
                { ExpenseID: 2, ExpenseTitle: "Travel", Category: "Petrol", PaymentMethod: "Card", Date: 12 / 15 / 2023, Description: "desc" },
                { ExpenseID: 3, ExpenseTitle: "Bills", Category: "Internet", PaymentMethod: "UPI", Date: 12 / 15 / 2023, Description: "desc" },
                { ExpenseID: 8, ExpenseTitle: "Lunch", Category: "Dining", PaymentMethod: "UPI", Date: 12 / 15 / 2023, Description: "desc" },
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