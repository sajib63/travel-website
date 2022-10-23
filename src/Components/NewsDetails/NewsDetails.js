import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Details from './Details';


const NewsDetails = () => {

    const allData=useLoaderData();
    

    return (
        <div>
            <h1>hello detials</h1>
<div className='grid grid-cols-4 gap-4'>
    
{
            allData.map(data=> <Details key={data._id} data={data}></Details>)
        }
</div>
            
        </div>
    );
};

export default NewsDetails;