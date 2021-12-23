import react, {useState, useEffect} from 'react';

const Hello = () => {
    const [data, setData] = useState([]);
    const [key, setKey] = useState('');
    const [page, setPage] = useState(0);

    async function getData(key, page){
        const res = await fetch(`https://localhost:3000/data?Searchkey=${key}&page=${page}`);
        const result = await res.json();
        setData(result);
    }

    useEffect(() => {
        if(key && key.length >= 3){
            getData(key, page)
        }
        
        return () => null
    }, [key, page]);

    return (
        <div>
            <input type="text" onChange={(e) => setKey(e.target.value)} value={key} />
            <button onClick={() => setPage(page + 1)}></button>
            <ul>
                {data.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    )


}

export default Hello;