import { useContext } from "react";
import { useEffect, useState } from "react";
import ExpensesTable from "./components/EpensesTable";
import ExpenseForm from "./components/ExpenseForm";
import { AppContext } from "./context/app-context";
import "./resources/css/style.css";
import MainImage from "./resources/images/m1.png";

let App = () => {
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
          <ExpenseForm  />
        </section>
      </section>
      <ExpensesTable
        // expenses={expenses}
        
      />
    </div>
  );
};
export default App;
