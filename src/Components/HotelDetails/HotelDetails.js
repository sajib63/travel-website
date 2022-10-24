import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CatchDate from '../CatchDate/CatchDate';




const HotelDetails = () => {
    const allData=useLoaderData();
  

    return (
        <div className="grid grid-cols-2 m-10 ">
          <div className="">
            <h1 className='text-6xl'>{allData.name}</h1>
            <p className='text-2xl'>{allData.location_details}</p>

           
            
            
            </div>
    
    
    
    <div className="shadow-lg border-2 w-3/4 bg-white p-5 m-10">
      <div>
        <p className="text-md font-medium my-2 text-gray-400">Origin</p>
        <select className="select w-full  bg-gray-100">
          <option disabled selected>
            Form
          </option>
          <option>Dhaka</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div>
        <p className="text-md font-medium my-2 text-gray-400">Destination</p>
        <select className="select w-full  bg-gray-100">
          <option disabled selected>
            To  {allData.name}
          </option>
          <option></option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div className="mt-5">
          <CatchDate></CatchDate>
      </div>

      <Link to={`/service/${allData.id}`}>
      <button className="btn btn-warning mt-4 w-full ">Start Booking</button>
      
      </Link>
    </div>
        </div>
      );
};

export default HotelDetails;