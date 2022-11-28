import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [addedproducts, setAddedProducts] = useState([]);
    const url = `https://dream-bikes-server.vercel.app/dashboard/addedproducts?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddedProducts(data)
            })
    }, [url])

    const handlePromote = (bikes) => {
        const { bikeCondition, bikeName, category, location, originalPrice, phoneNumber, purchase, sellingPrice } = bikes;
        const bikesData = {
            bikeCondition,
            bikeName,
            category,
            location,
            originalPrice,
            phoneNumber,
            purchase,
            sellingPrice
        };
        fetch('https://dream-bikes-server.vercel.app/dashboard/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(bikesData)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        toast.success('Bikes Promoted Successfully')
    }

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhttps://dream-bikes-server.vercel.app/dashboard/advertised/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = addedproducts.filter(products => products._id !== _id);
                        console.log(remaining);
                    }
                });
            toast.success('Deleted Successfully')

        }
    }

    return (
        <div className=' bg-[#E3FFE6] h-full'>
            <div className="overflow-x-auto  pt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Selling Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
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
                                    <td>Available</td>
                                    <td><button onClick={() => handlePromote(bikes.data)} className='btn btn-primary btn-sm'>Promote</button></td>
                                    <td><button onClick={() => handleDelete(bikes._id)} className='btn btn-sm'>Delete</button></td>
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