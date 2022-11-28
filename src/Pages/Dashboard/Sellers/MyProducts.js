import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>My products</h2>
        </div>
    );
};

export default MyProducts;