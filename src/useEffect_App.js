import React, {useState, useEffect} from "react";

const Hello = () => {

    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [data, setData] = useState([]);
    useEffect(() => {
        setFullName({name: 'anything', familyName: 'anything'});
    }, []);

    useEffect(() => {
        fetch('./api').then(r => r.json()).then(data => {
            setData(data);
        })
        return () => null;
    }, []);

    return (
        <div>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
    );

}

export default Hello;