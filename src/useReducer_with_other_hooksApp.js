// Combine useState, useEffect and useReducer hooks
import react, {useState, useEffect, useReducer} from 'react';

const Hello = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const [valid, setValid] = useState(false);

    useEffect(() => {
        if(form && form.username.length > 2 && form.password.length > 4) {
            setValid(true);
        }
        return ()=> null
    },[form]);

    const updateField = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        e.stopPropagation();
        if(valid) {
            console.log(form);
            // api call and send
        }
        return;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} onChange={updateField} />
                <input type="text" name="password" value={form.password} onChange={updateField} />
                <button>Submit</button>
            </form>
        </>
    );

};

export default Hello;