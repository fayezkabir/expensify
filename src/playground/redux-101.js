
console.log("hello from redux");


import  {createStore} from "redux";



//Action generators - function that returns action objects

// const incrementCount = (payload = {}) => ({ 
//     type : "INCREMENT",
//     incrementBy : typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// })
const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type : "INCREMENT",
    // incrementBy : typeof payload.incrementBy === "number" ?   incrementBy : 1  // payload.incrementBy : 1
    incrementBy  // as in es6 incrementBy : incrementBy  is the same
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


const store = createStore((state ={count: 0} , action) => {
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
});



const unSubscribe = store.subscribe( () => {
    console.log(store.getState());
});


//action is nothing but a object that gets sent to the store




//I'd like to increment the count
//  store.dispatch({
//     type : "INCREMENT",
//     incrementBy : 5
// });

store.dispatch(incrementCount({ incrementBy : 5 }) )


// store.dispatch({
//     type: "INCREMENT"
// })
store.dispatch(incrementCount() )



//I'd like to reset to zero

// store.dispatch({
//     type: "RESET"
// })

store.dispatch(resetCount({resetBy : 0}))


//I'd like to decreament the count
// store.dispatch({
//     type : "DECREMENT"
// })
store.dispatch(decrementCount())

// store.dispatch({
//     type : "DECREMENT",
//     decrementBy : 2
// })

store.dispatch(decrementCount({decrementBy: 10}))


// store.dispatch({
//     type : "SET",
//     count :120
// })
store.dispatch(setCount({setBy : 100}))