import { Component } from "react";

class ExpenseTrackerTable extends Component {
    render() {
        return <div>
            <table border={1}>
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
                <tbody>
                    {this.props.expensedata.map((expense) => {
                        return <tr>
                            <td>{expense.ExpenseID}</td>
                            <td>{expense.ExpenseTitle}</td>
                            <td>{expense.Category}</td>
                            <td>{expense.Amount}</td>
                            <td>{expense.PaymentMethod}</td>
                            <td>{expense.Date}</td>
                            <td>{expense.Description}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}
            export default ExpenseTrackerTable 