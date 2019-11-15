import React, { useReducer } from 'react';
//se le pasa el estado y la accion en si 
const appReducer = (state, action) => {
    // le decimos de que tipo va a ser la accion:
    switch (action.type) {
        case "ADD_USER":
            return {

                users: [...state.users, action.payload]
            };
    }
};

const UseReducer = () => {

    const initialState = {
        users: [
            { name: 'alan', age: 30 },
            { name: 'beto', age: 25 }

        ]
    };
    //useReducer nos trae estado y dispatch pero le tenemos que pasar su estado inicial
    // y sus reducer.
    const [state, dispatch] = useReducer(appReducer, initialState);
    //creamos accion de onClick
    const addUser = () => {
        const name = document.getElementById('form-name-input').value;
        const age = document.getElementById('form-age-input').value;
        const newUser = { name, age };
        dispatch({
            type: 'ADD_USER',
            payload: newUser
        })
    }
    return (
        <div>
            <h1>Use Reducer Hooks</h1>


            {state.users.map(user => <div> {`${user.name} y su edad es  ${user.age}`}</div>)}

            <h2>Formulario</h2>
            <div>

                <label>name: </label>
                <input id='form-name-input' />

            </div>
            <div>

                <label>age: </label>
                <input id='form-age-input' />

            </div>
            <button onClick={() => addUser()}>Submit</button>

        </div>

    )

}
export default UseReducer;
