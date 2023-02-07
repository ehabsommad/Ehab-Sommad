import { useContext } from "react";
import { AppContext } from "../context/app-context";

function ExpenseRow(props) {
  let appContext = useContext(AppContext);

  let onDeleteExpenseHandler = () => {
    let filteredArray = appContext.expenses.filter(
      (element) => element.id != props.expense.id
    );
    appContext.setExpenses(filteredArray);
  };
  return (
    <tr>
      <td>{props.expense.title}</td>
      <td>{props.expense.date}</td>
      <td>${props.expense.value}</td>
      <td>{props.expense.description}</td>
      <td>
        <a href="#" onClick={onDeleteExpenseHandler}>
          Delete
        </a>
      </td>
    </tr>
  );
}

export default ExpenseRow;
