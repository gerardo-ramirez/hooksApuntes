import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import NotFound from "./NotFound";
import URL from '../config';
import Card from './Cards';
const Exercises = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let res = await fetch(`${URL}/exercises`);
                const data = await res.json();
                console.log(data);
                setData(data);
                setLoading(false);

            } catch (error) {
                setError(error);
                setLoading(false);


            }

        }
        fetchExercises()

    }, []);

    /*  async componentDidMount() {
          await this.fetchExercises()
      };
   
  */

    if (loading) {
        return (<Loading />)
    }
    if (error) {
        return <NotFound />
    }
    return (

        <div>
            Bienvenidos:
                {data.map(exercise => {
                return (
                    //destructurin me permite simplificar las props que tienen el mismo nombre que las del json.
                    /*Forma Pura:
                    <Card
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
 
                    />
                    */

                    <div><Card
                        key={exercise.id}

                        {...exercise}


                    />
                    </div>
                )
            })}
        </div>



    )
}









export default Exercises;