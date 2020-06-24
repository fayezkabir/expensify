
import  {createStore} from "redux";



//Action generators - function that returns action objects
const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type : "INCREMENT",
    incrementBy
});

const decrementCount = ({decrementBy  = 1} ={}) => ({
    type : "DECREMENT",
    decrementBy
})

const setCount = ({setBy = 1} = {}) => ({
    type : "SET",
    setBy
})

const resetCount = ({resetBy = 1} = {}) => ({
    type : "RESET",
    resetBy
})


//reducer 

//reducers attributes

// 1. reducers are pure function (means output  only determine by input ) 
// 2. never change state or action

const countReducer = (state ={count: 0} , action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count : state.count - action.decrementBy
            }
        case 'SET' :
            return {
                count :action.setBy
            }
        case 'RESET' :
            return {
                count : action.resetBy
            }
        default :
        return state;

    }
};

//creating store
const store = createStore(countReducer);

//subscriber
const unSubscribe = store.subscribe( () => {
    console.log(store.getState());
});

//dispatching actions
store.dispatch(incrementCount({ incrementBy : 5 }) )

store.dispatch(incrementCount() )

store.dispatch(resetCount({resetBy : 0}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({setBy : 100}))