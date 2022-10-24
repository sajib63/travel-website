
import { useLoaderData } from 'react-router-dom';
import HotelServicesCard from '../HotelServicesCard/HotelServicesCard';


const HotelsService = () => {

    const datas = useLoaderData();

 

    

    
    return (
        <div className='grid grid-cols-2 m-10'>


            <div>
              {
                datas?.hotels.map(data=> <HotelServicesCard key={data.id} data={data}></HotelServicesCard>)
              }
            </div>


            {/* child 2 */}

            <div>

            </div>

        </div>
    );
};

export default HotelsService;