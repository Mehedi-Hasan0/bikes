import React from 'react';
// import { AuthContext } from '../../context/AuthProvider';

const CardsBike = ({ bike, setBikesDetails }) => {

    // const { user } = useContext(AuthContext);

    const { name, img, Date, location, original_price, resale_price, seller_name, years_of_use } = bike;


    // const handleBooking = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const date = form.appointmentDate.value;
    //     const slot = form.slot.value;
    //     const patientName = form.patientName.value;
    //     const email = form.email.value;
    //     const phone = form.phone.value;

    //     const booking = {

    //     }
    //     console.log(booking);
    // }


    return (
        <div className='flex flex-col justify-between shadow-lg rounded-xl bg-slate-50'>
            <figure><img className=' mx-auto rounded-xl border p-1' src={img} alt="" /></figure>
            <div className='p-7 '>
                <h4 className=' text-2xl font-semibold text-[#0F172A]'>Model: {name}</h4>
                <div className=' font-medium text-[#4C4E55] text-sm pb-4'>
                    <div className=' flex flex-row items-center my-4'>
                        <p className=' text-[#8740AA] mr-4 py-1 px-3 rounded-full bg-[#F3E8FF]'>01</p>
                        <p className=''>Location: {location}</p>
                    </div>
                    <div className=' flex flex-row items-center mb-4'>
                        <p className='text-[#2D44AF]  mr-4 py-1 px-3 rounded-full bg-[#DBEAFE]'>02</p>
                        <p>Years of use: {years_of_use}</p>
                    </div>
                    <div className=' flex flex-row items-center'>
                        <p className='text-[#A84447] mr-4 py-1 px-3 rounded-full bg-[#FEE2E2]'>03</p>
                        <p>original Price: {original_price}</p>
                    </div>
                    <div className=' flex flex-row items-center my-4'>
                        <p className=' text-[#8740AA] mr-4 py-1 px-3 rounded-full bg-[#F3E8FF]'>04</p>
                        <p className=''>Resale Price: {resale_price}</p>
                    </div>
                    <div className=' flex flex-row items-center mb-4'>
                        <p className='text-[#2D44AF]  mr-4 py-1 px-3 rounded-full bg-[#DBEAFE]'>05</p>
                        <p>Seller Name: {seller_name}</p>
                    </div>
                    <div className=' flex flex-row items-center'>
                        <p className='text-[#A84447] mr-4 py-1 px-3 rounded-full bg-[#FEE2E2]'>06</p>
                        <p>Posted: {Date}</p>
                    </div>
                </div>
            </div>
            <label
                onClick={() => setBikesDetails(bike)}
                htmlFor="booking-modal"
                className="btn text-white cursor-pointer font-semibold"
            >
                Book Now
            </label>
            {/* booking modal */}

        </div>
    );
};

export default CardsBike;