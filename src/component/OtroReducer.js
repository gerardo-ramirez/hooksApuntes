import React, { useReducer } from 'react';
const initialState = {
    usuarios: [
        { name: 'Ana', mail: 'dadadad@ggg.com' },
        { name: 'Leo', mail: 'lololol@hotmail.com' },
        { name: 'Carlo', mail: 'ututut@com.com' }

    ]
}
const unReducer = (state, action) => {
    switch (state.type) {
        case "AGREGAR": {
            return {
                nuevoUsuario: [...state.usuarios, action.payload]
            }

        }
    }

};



const OtroReducer = () => {

    const [state, dispatch] = useReducer(unReducer, initialState);
    const conSubmit = () => {
        const name = document.getElementById('name').value;
        const mail = document.getElementById('mail').value;
        const nuevoUsuario = { name, mail };
        dispatch({
            type: 'AGREGAR',
            payload: nuevoUsuario
        })

    }
    return (
        <div style={{ backgroundColor: 'grey', borderColor: 'cyan' }}>
            <h3>Otro Reducer</h3>
            <div>
                <label htmlFor='name'> name: </label>
                <input id='name' type='text'></input>
            </div>
            <div>
                <label htmlFor='mail'>mail:  </label>
                <input id='mail' type='text'></input>
            </div>
            <div>
                <button onClick={() => conSubmit()} style={{ backgroundColor: 'blue' }}>Submitir</button>
            </div>
            <div style={{ backgroundColor: 'yellow' }}>
                {state.usuarios.map(user => {
                    return (<p>{user.name}<br />{user.mail} </p>)


                })}

            </div>



        </div>
    )

}
export default OtroReducer;