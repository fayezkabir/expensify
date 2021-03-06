
import {createStore , combineReducers} from "redux";
import uuid from "uuid";


//ADD_EXPENSE
const addExpense = (
    {description = "" , note ="" , amount = 0, createAt = 0} = {}
    ) => ({
    type : "ADD_EXPENSE",
    expense : {
        id : uuid(),
        description,
        note ,
        amount,
        createAt
    }
})


//REMOVE_EXPENSE
const removeExpense =({id}={}) => ({
    type : "REMOVE_EXPENSE",
    id
})


//EDIT_EXPENSE
const editExpense = (id , updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type : "SET_TEXT_FILTER",
    text
})
//SORT_BY_DATE
const sortByDate = () => ({
    type:"SORT_BY_DATE"
})
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type:"SORT_BY_AMOUNT"
})
//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type : "SET_START_DATE",
    startDate
})
//SET_END_DATE

const setEndDate = (endDate = undefined) => ({
    type : "SET_END_DATE" ,
    endDate
})






//###########----------Expenses Reducers
const expensesReducerState =[];
const  expenseReducers = (state = expensesReducerState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' : 
            return [
                ...state , 
                action.expense
            ]
        case "REMOVE_EXPENSE" : 
            return state.filter(({id}) =>  id !== action.id );
        case "EDIT_EXPENSE" :
           return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
           })
        default : 
        return state
    }
}




//#############--------filter reducer
const filterReducerState ={
    text :"" ,
    sortBy : "data",
    startDate : undefined ,
    endDate : undefined
    };
const filterReducer = (state = filterReducerState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER" :
            return {
                ...state,
                text : action.text
            };
        case "SORT_BY_AMOUNT" :
            return {
                ...state,
                sortBy: "amount"
            };
        case "SORT_BY_DATE" :
            return {
                ...state,
                sortBy : "date"
            };

        case "SET_START_DATE" :
            return {
                ...state,
                startDate : action.startDate
            };
        case "SET_END_DATE" : 
        return {
            ...state , 
            endDate : action.endDate
        }
        default : 
        return state;
    }
}



//***********get  visible expenses

const getVisibleEexpenses = (expense , {text , sortBy , startDate , endDate}) => {
    return expense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch ;
    }).sort((a,b) => {
        if(sortBy === "date") {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};




//**************************create store
const store = createStore(
    combineReducers({
        expenses : expenseReducers,
        filters : filterReducer 
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleEexpenses(state.expenses , state.filters);
    console.log(visibleExpenses);
})

//dispatching acton
const expenseOne = store.dispatch(addExpense({
    description : "rent" , amount : 8000
}) )
const expenseTwo = store.dispatch(addExpense({
    description : "rent" , amount : 16000
}) )


store.dispatch(addExpense({description : 'rent' , amount : 100 ,createAt :-21000}))
store.dispatch(addExpense({description : 'Coffie' , amount : 200 ,createAt :-100}))

// store.dispatch(removeExpense({ id:expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 78096 }))

// store.dispatch(setTextFilter("rent"));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(12500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(458));

const demoState = {  
    expenses : [{
        id: "something_is",
        description : "rent",
        note : "this is final payment",
        amount : 8000,
        createAt : 0
    }],
    filters : {
        text : "rent",
        sortBy : "amount", // date or amount
        startDate : undefined,
        endDate : undefined
    }
}


// const user ={
//     name : "kabir",
//     age : 24
// }
// console.log({
//     ...user,
//     locstion: "kolkata"
// })