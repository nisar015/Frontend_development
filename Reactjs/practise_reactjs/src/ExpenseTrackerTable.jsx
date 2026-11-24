import { Component } from "react";

class ExpenseTrackerTable extends Component{
    render(){
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>ExpenseID</th>
                        <th>ExpenseTitle</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>PaymentMethod</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </table>
        </div>
    }
}
export default ExpenseTrackerTable 