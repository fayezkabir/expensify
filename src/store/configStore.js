import {createStore , combineReducers} from "redux";

import expenseReducers  from './../reducers/expenses';
import filterReducer from './../reducers/filters';


export default ( ) => { //**************************create store
    const store = createStore(
        combineReducers({
            expenses : expenseReducers,
            filters : filterReducer 
        })
    );

    return store;
}


