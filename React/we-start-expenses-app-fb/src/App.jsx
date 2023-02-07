import { useEffect, useState } from "react";
import ExpensesTable from "./components/EpensesTable";
import ExpenseForm from "./components/ExpenseForm";
import "./resources/css/style.css";
import MainImage from "./resources/images/m1.png";

let App = () => {
  // let expenses = []; // Stateless
  //State Management - useState Hook
  let [expenses, setExpenses] = useState([]);
  let onNewExpenseHandler = (expense) => {
    saveExpense(expense);
  };

  let saveExpense = (expense) => {
    fetch(
      "https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        expense.firebase_id = jsonData["name"];
        setExpenses((prevState) => {
          return [expense, ...prevState];
        });
        console.log(expenses);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let onDeleteExpenseHandler = (firebaseId) => {
    fetch(
      `https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        let filteredArray = expenses.filter(
          (element) => element.firebase_id != firebaseId
        );
        setExpenses(filteredArray);
      })
      .catch(function (error) {});
  };

  let fetchExpenses = () => {
    fetch(
      "https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        //
        console.log(jsonData);
        let expensesArray = [];
        for (let key in jsonData) {
          let expense = jsonData[key];
          expense.firebase_id = key;
          expensesArray.push(expense);
        }
        setExpenses(expensesArray);
      })
      .catch(function (error) {});
  };

  useEffect(fetchExpenses, []);

  return (
    <div className="content-wrapper">
      <section className="top-section">
        <img src={MainImage} alt="image-title" />
        <section>
          <span>Welcome to Expenses Manager</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            autem, ab suscipit nam ipsum consectetur obcaecati libero, quidem
            unde, saepe eligendi qui perferendis. Nisi architecto doloribus
            corporis a perspiciatis quod?
          </p>
          <ExpenseForm onNewExpense={onNewExpenseHandler} />
        </section>
      </section>
      <ExpensesTable
        expenses={expenses}
        onDeleteExpense={onDeleteExpenseHandler}
      />
    </div>
  );
};
export default App;
