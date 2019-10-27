import { useState, useEffect } from 'react';
//no importamos react porque no lo estaremos utilizando .

//este hook estara esperando un parametro
export const useFetch = url => {
    //cortamos y pegamos los use utilizados en ExerciseWith...
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //funcion anonima que eperará la url .
        const fetchResurce = async () => {
            try {
                let res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setData(data);
                setLoading(false);

            } catch (error) {
                setError(error);
                setLoading(false);


            }

        }
        fetchResurce()

    }, [url]);
    // en este caso si necesitamos que nuestro hook retorne informacion 
    //esa info será :
    return { data, loading, error }

};
