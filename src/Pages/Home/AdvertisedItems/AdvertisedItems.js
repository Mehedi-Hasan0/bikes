import React from 'react';
import AdvertisedCard from './AdvertisedCard';
import r15 from '../../../assets/yamahaBikes/yamaha-yzf-r3-g96a20ce6e_1920.jpg';
import mt15 from '../../../assets/yamahaBikes/motorbike-gd3158c926_1920.jpg';
import FZS from '../../../assets/yamahaBikes/bike-g82b53a3cc_1920.jpg';

const AdvertisedItems = () => {
    const advertiseCards = [
        {
            id: 1,
            name: 'Yamaha R15',
            price: '2,10,000',
            img: r15
        },
        {
            id: 2,
            name: 'Yamaha Scooter',
            price: '1,10,000',
            img: mt15
        },
        {
            id: 3,
            name: 'Yamaha FZS V2',
            price: '1,40,000',
            img: FZS
        },
    ]
    return (
        <section className='  md:py-32 py-16 '>
            <div className=' md:mx-16 mx-8'>
                <h2 className='font-semibold md:text-4xl text-center sm:text-3xl text-2xl text-[#0F172A]'>Advertised Bikes</h2>
                <div className=' md:pt-16 pt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        advertiseCards.map(card => <AdvertisedCard key={card.id} card={card} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AdvertisedItems;