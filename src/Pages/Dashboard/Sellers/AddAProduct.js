import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitProducts = data => {
        console.log(data);
    }
    return (
        <div className=' py-10'>
            <h2 className=' text-black text-center lg:text-4xl md:text-3xl sm:text-2xl mb-7'>Add a products</h2>
            <div className=' flex md:flex-row flex-col justify-center items-center font-[poppins] my-9 mx-3'>
                <div className=' p-8 shadow-lg md:w-96 w-80 rounded-xl mt-8 sm:mt-0'>
                    <h3 className=' text-xl text-black text-center'>Products Details</h3>
                    <form onSubmit={handleSubmit(handleSubmitProducts)}>
                        <div className=' form-control w-full max-w-xs text-black'>
                            <label className='label'><span className=' label-text text-neutral'>Name</span></label>
                            <input
                                {...register('bikeName', { required: 'Name is required' })}
                                type="text"
                                className='input input-bordered mb-2' />
                            {errors.bikeName && <p className=' text-red-400 text-xs'>{errors.bikeName?.message}</p>}
                        </div>
                        <div className=' form-control w-full max-w-xs text-black'>
                            <label className='label'><span className=' label-text text-neutral'>Selling Price</span></label>
                            <input
                                {...register('sellingPrice', { required: 'Price is required' })}
                                type="number"
                                className='input input-bordered mb-2' />
                            {errors.sellingPrice && <p className=' text-red-400 text-xs'>{errors.sellingPrice?.message}</p>}
                        </div>
                        <div className=' form-control w-full max-w-xs text-black mb-2'>
                            <label className='label'><span className=' label-text text-neutral'>Products condition</span></label>
                            <select className="select select-bordered w-full max-w-xs"
                                {...register('bikeCondition', { required: ' Choose at least one type' })}
                            >
                                <option selected>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                            {errors.role && <p className=' text-red-400 text-xs'>{errors.role?.message}</p>}
                        </div>
                        <div className=' form-control w-full max-w-xs text-black'>
                            <label className='label'><span className=' label-text text-neutral'>Phone Number</span></label>
                            <input
                                {...register('phoneNumber', { required: 'Phone Number is required' })}
                                type="number"
                                className='input input-bordered mb-2' />
                            {errors.phoneNumber && <p className=' text-red-400 text-xs'>{errors.phoneNumber?.message}</p>}
                        </div>
                        <div className=' form-control w-full max-w-xs text-black'>
                            <label className='label'><span className=' label-text text-neutral'>Location</span></label>
                            <input
                                {...register('location', { required: 'Location is required' })}
                                type="text"
                                className='input input-bordered mb-2' />
                            {errors.location && <p className=' text-red-400 text-xs'>{errors.location?.message}</p>}
                        </div>
                        <input type='submit' className='btn btn-neutral w-full mt-4' value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;