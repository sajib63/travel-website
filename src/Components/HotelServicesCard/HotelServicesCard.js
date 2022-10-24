import React from 'react';

const HotelServicesCard = ({data}) => {
    
    const {stay, title,  guests, beds, baths, room_img,bedrooms,service,rating, price}=data;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-4">
        <figure><img src={room_img} alt="Album" /></figure>

        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className='flex'>
                <p><span>{guests}</span></p>
               <p> <span>{bedrooms}</span></p>
                <p><span> {beds}</span></p>
                <p><span>{baths}</span></p>
            </div>
            <div>
            <p>{service}</p>
            </div>

            <div className='flex'>
                <p>{rating}</p>
                <p>{price}</p>
            </div>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Booking</button>
            </div>
        </div>
    </div>
    );
};

export default HotelServicesCard;