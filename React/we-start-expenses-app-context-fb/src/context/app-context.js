import { createContext, useState } from "react";

export const AppContext =createContext({
    expenses: [],
    setExpense: () => {},
})


export const AppContextProvider = (props) => {
    let [expensesArray , setExpensesArray] = useState([]);
    return <AppContext.Provider value={{
        expenses:expensesArray,
        setExpenses:setExpensesArray,
    }} >
        {props.children}
    </AppContext.Provider>
}