import React, {useState} from 'react';

const Hello = () => {

const [data, setData] = useState([]);
const [value, setValue] = useState('');

const updateData = () =>{
    // data.push(value)
    // setData([...data, value]);
    // setData([...data, {
    //     id: '1',
    //     value,
    // }]);
    setData(data => [...data, value]);

}

return (
    <>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
        <button onClick={updateData}>update</button>
        {/* {data.map((i, index) => {
            return <li key={index}>{i.id}</li>
        })} */}
    
    </>
);



}
export default Hello;