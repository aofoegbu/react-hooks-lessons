import React, {useState, useEffect} from 'react';

const Hello = () => {

    const [data, setData] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [key, setKey] = useState('');

    async function getData() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const result = await res.json();
        setData(result);
        setFilterList(result)
    }

        useEffect(() => {
            getData();
            return () => null
        }, []);

        useEffect(() => {
            const list = data.filter(i => i.name.toLowerCase().includes(key));
            setFilterList(list);
            return () => null
        }, [key])

    return (

        <div>
        <input type="text" onChange={(e)=> setKey(e.target.value)} value={key} />
            <ul>
                {filterList.map(el => (
                    <li key={el.id}>{el.name}</li>
                ))}
            </ul>

        </div>

    );

}

export default Hello;
