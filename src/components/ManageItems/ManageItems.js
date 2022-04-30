import React, { useEffect, useState } from 'react';

const ManageItems = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='mt-16'>
            <h2 className='font-bold'>Available Products: {products.length}</h2>
            {
                products.map(product => <p key={product._id}> <span>{product.name}</span> - <span>{product.price}</span></p>)
            }
        </div>
    );
};

export default ManageItems;