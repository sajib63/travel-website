import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const {img, id, name}=data;

    return (
        <div>
         <Link to='/data'>
         <div className="card w-3/4 mx-auto bg-base-100 mb-44">
                <div className="card-body">
                    <h2 className="card-title">{id}</h2>
                    <h2 className="card-title">{name}</h2>
                    
                </div>
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
         </Link>
        </div>
    );
};

export default Card;