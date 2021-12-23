import react, {useState, useEffect, useReducer} from "react";

const Hello = () => {

const [user, dispatch] = useReducer(reducer, initialState);
return (
    <div>
        <button onClick={() => dispatch('addname')}>+1</button>
        <button onClick={() => dispatch('addemail')}>-1</button>
        <button onClick={() => dispatch('nothing')}>reset</button>
        {user.name} {user.email}
    </div>
);
}

const initialState = {name: '', email: ''};
const reducer = (state , action) => {
    switch(action) {
        case 'addname':
            return {...state, name: 'augustine'};
        case 'addemail': 
            return {...state, email: 'oge@og.go'};
        default:
            return initialState;
    }
}

export default Hello;