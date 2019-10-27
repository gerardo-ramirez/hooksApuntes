import React, { useState } from 'react';
import ExcersiceForm from './ExerciseForm';
import ExerciseNew from './ExerciseNew';
import Cards from './Cards';
const ExerciseNewContainer = () => {
    const [form, setForm,] = useState();
    const [loading, setLoading, error, setError,] = useState(false);
    const handleChange = e => {

        let partialState = {};
        partialState[e.target.name] = e.target.value;
        setForm(partialState)
        console.log(form)
    };

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        try {
            //metodo de configuracion: como se envia la data
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)

            }
            let res = await fetch("http://localhost:8000/api/exercises", config);
            let json = await res.json();
            console.log(json);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            setError(true)

        }
        console.log('enviado');
    }
    return (
        <ExerciseNew form={form} handleChange={handleChange} handleSubmit={handleSubmit} error={error} loading={loading} />


    )
}
export default ExerciseNewContainer;