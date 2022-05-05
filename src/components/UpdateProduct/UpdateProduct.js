import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})

    //load the specific product by id
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
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
            <img className="rounded-t-lg h-20 mx-auto" src="https://media.cnn.com/api/v1/images/stellar/prod/210922153639-best-smartphones-lead.jpg?q=x_0,y_54,h_2082,w_3701,c_crop/h_720,w_1280" alt="" />
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
            </form>

            <Link to='/manage' className='bg-green-500 px-2 font-semibold rounded'>Manage Inventories</Link>
        </div>
    );
};

export default UpdateProduct;