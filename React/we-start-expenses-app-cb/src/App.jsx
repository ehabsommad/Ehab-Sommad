import axios from "axios";
import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import './resources/css/style.css';
import MainImage from './resources/images/m1.png';
class App extends React.Component {
    constructor(){
        super();
        this.state = {expenses: []};
    }

    // onNewExpenseHandler = (newExpense) => {
    //     this.setState((prevState) =>({expenses:[newExpense,...prevState.expenses]}));
    //     // this.setState({expenses:[newExpense, ...this.state.expenses]});
    // };

    onNewExpenseHandler(newExpense)  {
        // console.log(newExpense)
        axios.post(
            "https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses.json",
            newExpense,
            {
                headers:{accept:"application/json"}
            }
            ).then((response) => {
                newExpense.firebase_id = response.data.name;
                console.log(newExpense)
                this.setState((prevState) =>({expenses:[newExpense,...prevState.expenses]}));
                // this.setState({expenses:[newExpense, ...this.state.expenses]});
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {})
    };

    onDeleteExpenseHandler = (firebaseId) => {
        axios.delete(`https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,{
            headers:{
                accept:"application/json"
            },
        })
        .then((response) => {
            let filteredExpenses = this.state.expenses.filter(
                (element) => element.firebase_id !=firebaseId
            );
            this.setState({expenses: filteredExpenses});
        })
    }

    componentDidMount (){
        console.log("componentDidMount")
        this.fetchExpenses();
    }

    fetchExpenses = () => {
        axios.get(`https://ws-expenses-react-609a4-default-rtdb.firebaseio.com/expenses.json`,{
            headers:{
                accept:"application/json",
            },
        }
        ).then((response) => {
            let expensesArray = [];
            for (let key in response.data){
                let expense = response.data[key];
                expense.firebase_id = key;
                expensesArray.push(expense);
            }
            this.setState({expenses:expensesArray});
        })
        .catch((error) => {})
    }



    render(){
        return     <div className="content-wrapper">
        <section className="top-section">
            <img src={MainImage} alt="image-title"/> 
            <section>
                <span>Welcome to Expenses Manger </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid nesciunt est iure minus aspernatur. Tenetur laboriosam maiores consectetur molestiae quis enim sed, unde quaerat, aperiam laudantium consequatur vero voluptatum!</p>
            <ExpenseForm  onNewExpense={this.onNewExpenseHandler.bind(this)}/>
            </section>
        </section>
            <ExpensesTable 
            expenses={this.state.expenses} 
            onDeleteExpense={this.onDeleteExpenseHandler}
            />
    </div>
    
    }
}
export default App;