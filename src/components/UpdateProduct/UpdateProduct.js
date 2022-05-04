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
    }, [id, product.quantity])

    let updatedProduct;
    let quantity = product.quantity;

    const handleDelivered = (action) => {
        updateProduct('delivered')

    }

    const handleUpdateQuantity = (e) => {
        e.preventDefault();
        const updatedQuantity = e.target.updatedQuantity.value;
        updateProduct('updateQuantity', updatedQuantity)
        e.target.reset();

    }


    const updateProduct = (action, q) => {

        if (action === 'delivered') {
            if (product.quantity > 0) {
                quantity = product.quantity - 1;
                updatedProduct = { quantity };
            }
        }
        if (action === 'updateQuantity') {
            quantity = product.quantity + parseInt(q);
            updatedProduct = { quantity };
        }

        //send data to server
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // alert('Product Updated Successfully');
                    setProduct(updatedProduct);
                }
            })

    }


    return (
        <div className='mt-16'>
            <p>Product Id: {product._id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Available Qty: {product.quantity}</p>

            <button onClick={handleDelivered} className='bg-blue-400 px-2 rounded mt-3 font-semibold'>Delivered</button>
            <form onSubmit={handleUpdateQuantity}>
                <input type="number" name='updatedQuantity' placeholder='Quantity' />
                <br />
                <button className='bg-orange-400 px-2 rounded mt-3 font-semibold'>Update Quantity</button>
            </form>
        </div>
    );
};

export default UpdateProduct;