import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import { expensesActions } from "./redux/expenses-slice";
import "./resources/css/style.css";
import MainImage from "./resources/images/m.png"
let App = () => {
    let dispatch = useDispatch();
    let fetchExpenses = () =>{
        axios.get(`https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses.json`)
        .then(function(response) {
            let expenses = [];
            for(let key in response.data){
                let expense = response.data[key];
                expense.firebase_id = key ;
                expenses.push(expense);
            }
            dispatch(expensesActions.read(expenses));
        })
        .catch(function(error) {});
    }
    useEffect(fetchExpenses,[]);

    return(    
    <div className="content-wrapper">
    <section className="top-section">
        <img src={MainImage} alt="image-title"/> 
        <section>
            <span>Welcome to Expenses Manger </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid nesciunt est iure minus aspernatur. Tenetur laboriosam maiores consectetur molestiae quis enim sed, unde quaerat, aperiam laudantium consequatur vero voluptatum!</p>
        <ExpenseForm />
        </section>
    </section>
    <ExpensesTable  />
</div>);
};
export default App ;