import { useState, useEffect } from 'react';
import zomato from '../api/zomato';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (serachText) => {
        try {
            const response = await zomato.get('/search', {
                params: {
                    count: 50,
                    q: serachText,
                    entity_id: 'Bangalore'
                }
            })
            setResults(response.data.restaurants);
        } catch (e) {
            setError('Something went wrong...')
        }
    };

    useEffect(()=>{
        searchApi('pasta')
    },[]);

    return [searchApi, results, error];
};