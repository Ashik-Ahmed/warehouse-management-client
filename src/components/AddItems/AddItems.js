import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;


    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const supplier = e.target.supplier.value;
        const photo = e.target.photo.value;

        const product = { email, name, price, quantity, description, supplier, photo };

        //send data to the server
        fetch('http://localhost:5000/add', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product added successfully");
                    e.target.reset();
                }
            })
    }


    return (
        <div className='mt-16'>
            <h2>Adding Items</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="text" name='price' placeholder='Price' required />
                <br />
                <input type="text" name='description' placeholder='Description' required />
                <br />
                <input type="text" name='supplier' placeholder='Supplier' required />
                <br />
                <input type="text" name='quantity' placeholder='Quantity' required />
                <br />
                <input type="text" name='photo' placeholder='Photo Link' />
                <br />
                <input className='bg-blue-600 font-semibold cursor-pointer px-7 mt-4 rounded ' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddItems;