import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Home/Banner/Banner';
import BookingModal from './BookingModal/BookingModal';
import CardsBike from './CardsBike';

const BikesCategories = () => {
    const bikesData = useLoaderData();
    const [bikesDetails, setBikesDetails] = useState(null);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <section>
            <Banner />
            <div className=' md:my-32 my-16 md:mx-16 mx-8 '>
                <h3 className=' text-3xl text-center mb-14 font-medium'>{bikesData.name} Bikes</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {
                        bikesData.bikes.map((bike, i) => <CardsBike
                            key={i}
                            bike={bike}
                            bikesData={bikesData}
                            setBikesDetails={setBikesDetails}
                        />)
                    }
                </div>
            </div>
            {
                bikesDetails &&
                <BookingModal
                    bikeDetails={bikesDetails}
                    setBikesDetails={setBikesDetails}
                />
            }
        </section>
    );
};

export default BikesCategories;