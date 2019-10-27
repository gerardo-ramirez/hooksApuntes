import React from 'react';
import Loading from "./Loading";
import NotFound from "./NotFound";
import { useFetch } from '../Hooks/useFetch'
import URL from '../config';
const ExerciseWithMyHook = () => {
    //Obtenemos toda la informacion que nuestro hook nos esta retornando.
    //de la siguiente forma:
    const { data, loading, error } = useFetch(`${URL}/exercises`)





    if (loading) {
        return (<Loading />)
    }
    if (error) {
        return <NotFound />
    }
    return (

        <ul>
            USANDO MI HOOK:
                {data.map(exercise => {
                return (
                    <li style={{ color: 'blue' }}>``${exercise.title}</li>



                )
            })}
        </ul>



    )
}









export default ExerciseWithMyHook;