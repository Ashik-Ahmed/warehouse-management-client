import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})

    //load the specific product by id
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleDelivered = () => {
        if (product.quantity > 0) {
            product.quantity -= 1;
            console.log(product.quantity)
        }
    }

    return (
        <div className='mt-16'>
            <p>Product Id: {product._id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Available Qty: {product.quantity}</p>

            <button onClick={handleDelivered} className='bg-blue-400 px-2 rounded mt-3 font-semibold'>Delivered</button>
        </div>
    );
};

export default UpdateProduct;