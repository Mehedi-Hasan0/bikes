import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/dashboard/addedproducts?email=${user?.email}`

    const { data: addedproducts = [] } = useQuery({
        queryKey: ['addedproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className=' bg-[#E3FFE6] h-full'>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Selling Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedproducts &&
                            addedproducts?.map((bikes, i) =>
                                <tr className='hover' key={i}>
                                    <th>{i + 1}</th>
                                    <td>{bikes.data.bikeName}</td>
                                    <td>{bikes.data.sellingPrice}</td>
                                    <td>{bikes.data.location}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyProducts;