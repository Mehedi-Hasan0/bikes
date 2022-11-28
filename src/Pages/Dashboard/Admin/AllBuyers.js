import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);

    useEffect(() => {
        fetch('https://dream-bikes-server.vercel.app/dashboard/users/buyers')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllBuyers(data);
            }
            )
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete.')
        if (proceed) {
            fetch(`https://dream-bikes-server.vercel.app/dashboard/users/Buyers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allBuyers.filter(seller => seller._id !== id);
                    toast.success('Buyer deleted successfully');
                    setAllBuyers(remaining);
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
                            allBuyers &&
                            allBuyers?.map((buyers, i) =>
                                <tr className='hover' key={i}>
                                    <th>{i + 1}</th>
                                    <td>{buyers.name}</td>
                                    <td>{buyers.email}</td>
                                    <td><button onClick={() => handleDelete(buyers._id)} className='btn btn-sm'>delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;