import React from 'react';
import bgImg from '../../../assets/bannerImage/banner-img.jpg';
import bike from '../../../assets/bannerImage/bike.png';

const Banner = () => {
    return (
        <section
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'center'
            }}
        >
            <div className="hero">
                <div className="md:py-20 py-10 md:px-14 px-2 hero-content flex-col-reverse lg:flex-row-reverse">
                    <img className='lg:w-1/2 h-[50%] drop-shadow-2xl' src={bike} alt='heroImage' />
                    <div className=' px-[4%] md:px-0'>
                        <p className=" lg:text-xl md:text-lg text-base">In this month, find the best 🔥</p>
                        <h1 className="pt-5 pb-3 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#0F172A] xl:leading-snug">Exclusive collection for everyone</h1>
                        <p className=" md:text-base text-sm pb-5">Dream bikes is a old bikes reselling website. Those who can't buy a good motorbikes because of price this website is for you to get your dream bikes!!</p>
                        <button className="btn normal-case text-base">Explore now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;