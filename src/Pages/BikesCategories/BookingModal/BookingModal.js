import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ bikeDetails, setBikesDetails }) => {
    const { user } = useContext(AuthContext);
    const { name, resale_price } = bikeDetails;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bikeModel = form.bikeModel.value;
        const buyerEmail = form.buyerEmail.value;
        const buyerName = form.buyerName.value;
        const resale_price = form.resale_price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            buyerEmail,
            buyerName,
            resale_price,
            phone,
            bikeModel,
            Meeting_location: location
        }
        console.log(booking);
        fetch('https://dream-bikes-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBikesDetails(null);
                    toast.success('Booking confirmed!');
                } else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal text-neutral ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Model: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-6'>
                        <input name='bikeModel' type="email" placeholder="Email Address" disabled defaultValue={name} className="input w-full input-bordered" />
                        <input name='buyerEmail' type="email" placeholder="Email Address" disabled defaultValue={user?.email} className="input w-full input-bordered" />
                        <input name='buyerName' type="text" placeholder="Your Name" disabled defaultValue={user?.displayName} className="input w-full input-bordered" />
                        <input type="text" name='resale_price' value={resale_price} readOnly className="input w-full bg-gray-200 text-neutral font-[poppins] font-medium  input-bordered  disabled" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className=' w-full btn btn-neutral' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;