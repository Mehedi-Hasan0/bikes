// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [allSellers, setAllSellers] = useState([]);

    useEffect(() => {
        fetch('https://dream-bikes-server.vercel.app/dashboard/users/sellers')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllSellers(data);
            }
            )
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete.')
        if (proceed) {
            fetch(`https://dream-bikes-server.vercel.app/dashboard/users/sellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allSellers.filter(seller => seller._id !== id);
                    toast.success('Seller deleted successfully');
                    setAllSellers(remaining);
                })
        }
    }
    // console.log(id);

    return (
        <div className=' bg-[#E3FFE6] h-full'>
            <div className="overflow-x-auto  pt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers &&
                            allSellers?.map((Seller, i) =>
                                <tr className='hover' key={i}>
                                    <th>{i + 1}</th>
                                    <td>{Seller.name}</td>
                                    <td>{Seller.email}</td>
                                    <td><button onClick={() => handleDelete(Seller._id)} className='btn btn-sm'>delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;