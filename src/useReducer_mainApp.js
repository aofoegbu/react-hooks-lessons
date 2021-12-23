import react, {useReducer} from 'react';

const Hello = () => {

    const [user, dispatch] = useReducer(reducer, initialState);

    const handleNameChange = (e) => {
        dispatch({
            type: 'addname',
            payload: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        dispatch({
            type: 'addemail',
            payload: e.target.value
        })
    }

    return (
        <div>
            <form>
                <input name="name" type="text" onChange={handleNameChange} />
                <input name="email" type="text" onChange={handleEmailChange} />
            </form>
            <br />
            Email: {user.email} <br />
            Name: {user.name}
        </div>
    );

}

const initialState = {
    name: '',
    email: ''
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'addname':
            return {...state, name: action.payload}
        case 'addemail':
            return {...state, email: action.payload}
        case 'nothing':
            return initialState;
        default:
            throw new Error('Unexpected action');
    }
}

export default Hello;