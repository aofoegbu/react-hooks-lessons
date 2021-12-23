import react, {useState, useReducer, useEffect, useContext} from 'react';
import { SharedContext, formReducer } from './context';
import Form from './form';
import axios from 'axios';
const initialState = {
    data: []
};

function App() {
    const [state, dispatch] = useReducer(formReducer, initialState);

    useEffect(() => {
        axios.get('/api/v1/get-data').then(res => {
            dispatch({
                type: 'update',
                data: res.data
            })
        })
        return () => null;
    }, []);

    return (
        <SharedContext.Provider value={{state, dispatch}}>
            <div class='App'>
                <Form />
            </div>
        </SharedContext.Provider>
    );
}

export default App;