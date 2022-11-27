import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Banner />
            <AdvertisedItems />
            <Categories />
            <Offers />
        </div>
    );
};

export default Home;