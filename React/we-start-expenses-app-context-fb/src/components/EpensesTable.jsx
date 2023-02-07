import { useContext } from "react";
import { AppContext } from "../context/app-context";
import ExpenseRow from "./ExpenseRow";

export default function ExpensesTable() {
  let appContext = useContext(AppContext);
  return (
    <section className="bottom-section">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Value</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appContext.expenses.map((element) => (
            <ExpenseRow
              key={element.id}
              expense={element}

            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
