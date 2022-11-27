import React from 'react';

const AdvertisedCard = ({ card }) => {
    const { name, price, img } = card;
    return (
        <div className='flex flex-col justify-between card-side shadow-xl bg-[#EFF6FF] rounded-xl'>
            <figure>
                <img className=' rounded-xl' src={img} alt="bikes" />
            </figure>
            <div className=' flex flex-row items-center justify-between  p-4'>
                <div className="flex flex-col justify-around my-4">
                    <h2 className="text-xl text-[#0F172A]">{name}</h2>
                    <p className=' text-lg text-[#0F172A] opacity-90'>Price: {price}</p>
                </div>
                <button className='btn'>see details</button>
            </div>
        </div>
    );
};

export default AdvertisedCard;