import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Home = () => {

    const [products] = useProducts();

    return (
        <div className='mt-16 container mx-auto'>
            <div className='grid grid-cols-6 gap-4'>
                {
                    products.slice(0, 10).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;