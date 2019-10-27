import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul>
                <Link to={'/hola'}>Hola</Link>
                <Link to={'/exercises'}>Exercise</Link>
                <Link to={'/exercise/new'}>ExerciseNew</Link>
                <Link to={'/card'}></Link>
                <Link to={'/welcome'}>welcome</Link>


            </ul>
        </div>
    )

}
export default Nav;

