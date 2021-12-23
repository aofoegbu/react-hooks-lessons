// useReducer hooks
import react, {useState, useEfect, useReducer, useContext} from "react";
import SharedContext from "./context";

const App = () => {

    const [count, setCount] = useState({username: 'oge'});
    return (
        <SharedContext.Provider value={count}>
            <Child />
        </SharedContext.Provider>
    )
}
export default App;
const Child = () => {
    return <GChild />
}

const GChild = () => {
    const value = useContext(SharedContext);
    return <h1>{value.username}</h1>
}
