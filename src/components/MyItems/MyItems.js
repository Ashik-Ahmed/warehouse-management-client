import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [myProducts, setMyProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user])

    console.log(user?.email)
    const myItems = [];

    return (
        <div className='mt-16'>
            <h2 className='font-bold'>Item list added by you</h2>
            {
                myProducts.map(item => {
                    if (item?.email === user?.email) {
                        myItems.push(item);
                    }
                })

            }
            {
                myItems?.map(myItem => <p>{myItem.name}</p>)
            }
        </div >
    );
};

export default MyItems;