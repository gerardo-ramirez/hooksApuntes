import React from 'react';
import ejemplo from '../image/avatar.jpg';
import '../css/Cards.css';
const Cards = ({
    title,
    description,
    img,
    leftColor,
    rightColor



}) => {

    return (

        <div className='card-body'>
            <div className='row center'>
                <div className='col-6'>
                    <div>
                        <ul>

                            <li>{title}</li>
                            <li>{description}</li>
                            <li>{img}</li>
                            <li>{leftColor}</li>
                            <li>{rightColor}</li>


                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Cards;
