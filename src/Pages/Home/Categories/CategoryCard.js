import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ card }) => {
    const { name, img, _id } = card;
    return (
        <div className="flex flex-col items-center justify-between p-5 shadow-xl bg-[#fefce8] rounded-xl">
            <figure><Link to={`/category/${_id}`}><img className=' w-40' src={img} alt="brandLogo" /></Link></figure>
            <Link to={`/category/${_id}`}><h2 className="font-semibold text-xl text-[#6b7280] mt-2">{name}</h2></Link>
        </div>
    );
};

export default CategoryCard;