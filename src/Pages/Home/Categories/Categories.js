import React from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
    const { data: categoryCard = [] } = useQuery({
        queryKey: ['categoryCard'],
        queryFn: async () => {
            const res = await fetch('https://dream-bikes-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <section className='  md:pb-32 pb-16'>
            <div className=' md:mx-16 mx-8'>
                <h2 className='font-semibold md:text-4xl sm:text-3xl text-2xl text-[#0F172A] text-center'>Bikes Category</h2>
                <div className=' md:pt-16 pt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        categoryCard.map(card => <CategoryCard key={card._id} card={card} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;