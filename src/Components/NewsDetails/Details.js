import React from 'react';

const Details = ({data}) => {
    console.log(data);
    return (
        <div className="card w-96 bg-base-100 shadow-xl flex">
        <figure><img src={data.image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Details;