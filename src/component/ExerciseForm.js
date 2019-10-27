import React, { useState } from 'react';

const ExcerciseForm = ({ onChange, form, onSubmit }) => {

    return (
        <div className="row">
            <h3 className="col-4">Exercise new</h3>
            <form className="col-4" onSubmit={onSubmit}>
                <div className="form-group ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="color"
                        name="color"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="dato"
                        name="description"
                        onChange={onChange}

                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="tilte"
                        name="title"
                        onChange={onChange}

                    />



                </div>
                <button type="submit" >Enviar</button>
            </form>
            <h4>El estado es: </h4> {}
        </div >

    )
}
export default ExcerciseForm;