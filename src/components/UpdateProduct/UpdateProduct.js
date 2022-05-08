import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})

    //load the specific product by id
    useEffect(() => {
        const url = `https://gentle-meadow-44621.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, product?.quantity])

    let updatedProduct;
    let quantity = product?.quantity;

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
                const sold = parseInt(product?.sold || 0) + 1;
                updatedProduct = { quantity, sold };
            }
        }

        if (action === 'updateQuantity') {
            if (q) {
                quantity = product.quantity + parseInt(q);
                const sold = product.sold;
                updatedProduct = { quantity, sold };
            }
            else {
                alert('Please enter a number')
            }
        }

        //send data to server
        const url = `https://gentle-meadow-44621.herokuapp.com/product/${id}`;
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
            {/* <p>Product Id: {product._id}</p>
            <img className="rounded-t-lg h-20 mx-auto" src={product.photo} alt="" />
            <p>Name: {product.name}</p>
            <p>Supplier: {product.supplier || 'N/A'}</p>
            <p>Price: {product.price}</p>
            <p>Sold: {product.sold}</p>
            <p>Available Qty: {product.quantity}</p>
            <p>{product.description || 'Sample Text description'}</p>

            <button onClick={handleDelivered} className='bg-blue-400 px-2 rounded mt-3 font-semibold'>Delivered</button>
            <form onSubmit={handleUpdateQuantity}>
                <input type="number" name='updatedQuantity' placeholder='Quantity' />
                <br />
                <button className='bg-orange-400 px-2 rounded mt-3 font-semibold'>Restock   </button>
            </form> */}




            <div className='text-left mx-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>

                <img class="object-cover w-full h-96 p-2 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.photo} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    <h4>Price: {product.price}</h4>
                    <p>Supplier: {product.supplier}</p>
                    <p>Stock: {product.quantity}</p>
                    <p>Sold: {product.sold}</p>
                    <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">{product.description}</p>
                </div>
            </div>

            <button onClick={handleDelivered} className='bg-blue-400 px-2 rounded mt-3 font-semibold'>Delivered</button>
            <div className='bg-blue-400 p-2 inline-block rounded'>
                <form className='flex items-center gap-x-2 ' onSubmit={handleUpdateQuantity}>
                    <input className='rounded p-1' type="number" name='updatedQuantity' placeholder='Quantity' />
                    <br />
                    <button className='bg-orange-400 p-1 rounded font-semibold'>Restock   </button>
                </form>
            </div>
            <Link to='/manage' className='bg-green-500 px-2 font-semibold rounded'>Manage Inventories</Link>
        </div>
    );
};

export default UpdateProduct;