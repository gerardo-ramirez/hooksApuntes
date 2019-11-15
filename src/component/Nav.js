import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
                <li><Link to={'/hola'}>Hola</Link></li>
                <li><Link to={'/exercises'}>Exercise</Link></li>
                <li><Link to={'/exercise/new'}>ExerciseNew</Link></li>
                <li><Link to={'/card'}></Link></li>
                <li><Link to={'/welcome'}>welcome</Link></li>
                <li><Link to={'/usereducer'}>useReducer</Link></li>
                <li><Link to={'/ejemploreducer'}>Ejemplo reducer</Link></li>
                <li><Link to={'/otroreducer'}>Otro Reducer</Link></li>
            </ul>
        </div>
    )

}
export default Nav;

