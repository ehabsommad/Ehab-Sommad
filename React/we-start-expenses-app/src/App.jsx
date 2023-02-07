import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import "./resources/css/style.css";
import MainImage from "./resources/images/m1.png"
let App = () => {
    // let expenses = []; Stateless
    //State Management - useState Hook
    let [expenses,setExpenses] = useState([])
    let onNewExpenseHandler = (expense) => {
        // alert (`Expense Title: ${expense.title}`);
        // expenses.push(expense);
        setExpenses((prevState =>{
            return [expense, ...prevState ]
        }  ));
        console.log(expenses);
    }
    let onDeleteExpenseHandler =(id) =>{
        // alert(id);
        let filteredArray = expenses.filter((element) => element.id != id);
        setExpenses(filteredArray);

    };
    return(    
    <div className="content-wrapper">
    <section className="top-section">
        <img src={MainImage} alt="image-title"/> 
        <section>
            <span>Welcome to Expenses Manger </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid nesciunt est iure minus aspernatur. Tenetur laboriosam maiores consectetur molestiae quis enim sed, unde quaerat, aperiam laudantium consequatur vero voluptatum!</p>
        <ExpenseForm onNewExpense={onNewExpenseHandler}/>
        </section>
    </section>
    <ExpensesTable expenses={expenses} 
    onDeleteExpense={onDeleteExpenseHandler} />
</div>);
};
export default App ;