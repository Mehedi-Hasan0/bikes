import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import bgImg from '../../../assets/bannerImage/bgImg2.jpg';
import bike from '../../../assets/yamahaBikes/motorcycle-gf3f02aea9_1920-removebg-preview.png';

const Offers = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleEmail = (data, e) => {
        const form = e.target;
        console.log(data);
        toast.success('Thanks for joining us')
        form.reset();
    }
    return (
        <section
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'center'
            }}
            className='mt-14 mb-16'
        >
            <div className="hero">
                <div className="md:py-24 py-14 md:px-14 px-2 hero-content flex-col-reverse lg:flex-row-reverse">
                    <img className='lg:w-1/2 h-[50%] drop-shadow-2xl' src={bike} alt='heroImage' />
                    <div className=' px-[4%] md:px-0'>
                        <h1 className=" pb-3 xl:text-5xl md:text-4xl text-3xl font-bold text-[#0F172A] xl:leading-tight">Don't miss out on special offers</h1>
                        <p className=" md:text-lg text-base pb-7 opacity-80">Register to receive news about the latest, saving combos, discount codes...</p>
                        <div className=' font-medium text-[#4C4E55] text-base pb-7'>
                            <div className=' flex flex-row items-center mb-4'>
                                <p className=' text-[#8740AA] mr-4 py-1 px-3 rounded-full bg-[#F3E8FF]'>01</p>
                                <p className=''>Savings combos</p>
                            </div>
                            <div className=' flex flex-row items-center mb-4'>
                                <p className='text-[#2D44AF]  mr-4 py-1 px-3 rounded-full bg-[#DBEAFE]'>02</p>
                                <p>Free shipment</p>
                            </div>
                            <div className=' flex flex-row items-center'>
                                <p className='text-[#A84447] mr-4 py-1 px-3 rounded-full bg-[#FEE2E2]'>03</p>
                                <p>Best deals every week</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(handleEmail)}>
                            <input type="email" placeholder="Enter your email here" {...register('email', { required: 'Email is Required' })} className="input input-bordered input-md md:w-full w-[60%] max-w-xs rounded-r-none" />
                            <button className="btn normal-case text-base ml-2 fixed ">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;