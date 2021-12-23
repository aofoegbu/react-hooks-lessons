import react, {useState, useEffect} from 'react';
import axios from 'axios';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = usState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountries(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true);
            })           
    }, []);

    if(load) {
        return (<ul>
            {error
            ? <li>{error.message}</li>}
            : countries.map(country, index) => <li key={index}>{CountryList.name}</li>}
        </ul>);
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }

};

export default CountryList;