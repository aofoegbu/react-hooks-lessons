import React, { useState } from 'react';
const Hello = () => {

    const [user, setUser] = useState({ name: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (user.name && user.email) {
            //    e.stopPropagation or e.preventDefault
            setSubmitted(true);
        }
        setMessage('please enter values ');
        return;
    }

    return (
        <form>
            <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />

            <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <button onClick={handleSubmit}>Submit</button>

            {user.name}
            {user.email}
            {message}
        </form>
    )


}

export default Hello;