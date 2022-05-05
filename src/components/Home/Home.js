import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Home = () => {

    const [products] = useProducts();

    return (
        <div className='mt-16 container mx-auto'>
            <div className='grid grid-cols-6 gap-4 border-t-4 border-blue-600 mt-0'>
                {
                    products.slice(0, 10).map(product => <Product key={product._id} product={product}></Product>)
                }
                <Link to='/manage' className='bg-green-500 px-1 font-semibold rounded mb-0'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;