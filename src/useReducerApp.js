import react, {useState, useEffect, useReducer} from "react";

const Hello = () => {

const [count, dispatch] = useReducer(reducer, initialState);
return (
    <div>
        <button onClick={() => dispatch('increment')}>+1</button>
        <button onClick={() => dispatch('decrement')}>-1</button>
        <button onClick={() => dispatch('reset')}>reset</button>
        {count}
    </div>
);
}

const initialState = 0;
const reducer = (state , action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement': 
            return state - 1;
        case 'reset': 
            return 0;
        default:
            return;
    }
}

export default Hello;