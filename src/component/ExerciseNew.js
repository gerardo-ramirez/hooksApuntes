import React, { useState } from 'react';

import ExcersiceForm from './ExerciseForm';

const ExerciseNew = ({ handleChange, handleSubmit, form, loading, error }) => {
    return <>
        <div>
            {loading ? <div>cargando...</div> :
                error ? <div> grave Error </div> :
                    <h1>Formulario</h1>
            }

        </div >
        <ExcersiceForm
            onSubmit={handleSubmit}
            onChange={handleChange} form={form} />
    </>

}
export default ExerciseNew; 