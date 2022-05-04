import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';

const MyItems = () => {

    const [user] = useAuthState(auth);

    const [myProducts, setMyProducts] = useProducts();
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
                myItems?.map(myItem => <p key={myItem._id}>{myItem.name}</p>)
            }
        </div >
    );
};

export default MyItems;