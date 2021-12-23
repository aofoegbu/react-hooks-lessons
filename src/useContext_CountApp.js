import react, {useState, useReducer, useContext} from "react";
import SharedContext from "./context";

const App = () => {

    const [count, setCount] = useState(0);
    
    return  (
        <SharedContext.Provider value={[count, setCount]}>
            <div classname='App'>
                <Counter />
            </div>
        </SharedContext.Provider>
    );

}

const Counter = () => {
    const [count, setCount] = useContext(SharedContext);
    return (
        <div>
            <h5>Count: {count}</h5>
            {/* Todo: Increment */}
            <button onClick={() => setCount(count + 1)}>+</button>
            {/* Totdo: Decrement */}
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default App;