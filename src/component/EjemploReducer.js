import React, { useReducer } from 'react';
const Reducer = ( state, action)=>{
    switch (action.type){
        case "agregar_user":
            return{
                users:[...state.users, action.payload]
            }
    }
};

const EjemploReducer = ()=>{
    const initialState = {
        users:[
            {name: 'paula', age: 25 },
            {name: 'nadia', age: 44 }

        ]
    };

    const addUsers = ()=>{
        const name = document.getElementById('inputName').value;
        const age = document.getElementById('inputAge').value;
        const nuevoUser = {name, age };
        dispatch({
            type: "agregar_user",
            payload: nuevoUser
        })

    }
    const [state, dispatch ]= useReducer(Reducer, initialState);

    return(
        <div>
            <h1>Ejemplo con Reducer</h1>
                <div style={{background: 'lightblue'}}>
                    {state.users.map(user =>{
                        return(<li>{user.name}</li>)
                    })}

                </div>
                <div style={{background: 'gold'}}>
                <h2>Formulario</h2>
            <div>

                <label>name: </label>
                <input id='inputName' />

            </div>
            <div>

                <label>age: </label>
                <input id='inputAge' />

            </div>
            <button onClick={() => addUsers()}></button>



                </div>

        </div>
    )

}
export default EjemploReducer;
