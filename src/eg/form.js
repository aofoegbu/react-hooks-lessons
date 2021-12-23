import React, {useContext} from "react";
import SharedContext from './context';

const Form = () => {
    const {state, dispatch} = useContext(SharedContext);

    return (
        <div>
            <h5>Count: {state.email}</h5>
            <h5>Count: {state.password}</h5>
            {/* Todo Increment */}
            <input type="email" value={state.email}
            onChange={(e) => dispatch({ type: 'updateEmail', value: e.target.value })} />

            <input type="password" value={state.password}
            onChange={(e) => dispatch({type: 'updatePassword', value: e.target.value})} />

            {state.submitted ? 'submitted' : 'not submitted'}
        </div>
    );
}

export default Form;
