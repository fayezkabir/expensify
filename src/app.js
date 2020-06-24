import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configStore from './store/configStore';
import 'normalize.css/normalize.css';
import "./styles/style.scss";

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configStore();

store.dispatch(
    addExpense({description : "water bill"})
);
store.dispatch(
    addExpense({description : "gas bill"})
);

store.dispatch(setTextFilter('water'));


const state = store.getState();
console.log(state , "***************************")
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);

console.log(visibleExpenses)


// console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('app'))

























// class OldSyantax {
//     constructor() {
//         this.name = "Mike"

//     }
// }
// const oldSyantax = new OldSyantax();

// console.log(oldSyantax)


// //-----------

// class NewSystax {
//     name = "fayez"
// }

// const  newSyntax = new NewSystax();
// console.log(newSyntax)