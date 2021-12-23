import React, {useState} from 'react';

function Example() {
    //declare a new variable, which we'll call count

    const [count, setCount] = useState(0);
    const [value, setvalue] = useState('');
    const [flag, setFlag] = useState(false);

    const incCount = () => {
      setCount(prvState => prvState + 1);
    }   
     const resetCount = () => {
      setCount(0);
    }
    const decCount = () => {
      setCount(count - 1);
    }

    const handleChange = (e) => {
      if(e.target.value){
        setFlag(true);
        setvalue(e.target.value);
      }else {
        setFlag(false);
      }
      
    }
    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={incCount}>++</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decCount}>--</button>

            <br/>
            <input type="text" onChange={handleChange}  value={value}/>
            <p>{value}</p>
            {flag}
            

        </div>
    )


}

export default Example;