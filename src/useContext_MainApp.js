import react, {useState, useReducer, useEffect,useContext} from 'react';
import SharedContext from './context';

let reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, count: state.count +1 };
        case 'decrement':
            return {...state, count: state.count -1};
            default:
                return;
    }
};
const initialState = { count: 0 };

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <SharedContext.Provider value={{state, dispatch}}>
            <div className='App'>
                <Counter />
            </div>
        </SharedContext.Provider>
    )
}

const Counter = () => {
    const { state, dispatch } = useContext(SharedContext);
    return (
        <div>
            <h5>Count: {state.count}</h5>
            {/* Todo Increment */}
            <button onClick={() => dispatch({type: 'increment'})}>++</button>
            <button onClick={() =>dispatch({type: 'decrement'})}>--</button>
        </div>
    )
}

export default App;