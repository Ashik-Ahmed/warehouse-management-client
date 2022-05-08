import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { _id, name, price, quantity, supplier, description, photo } = props.product;

    return (
        <div>

            <div className="max-w-sm text-left bg-white rounded-lg border h-full border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                {
                    quantity > 0 ? '' : <span class="bg-yellow-300 text-yellow-800 text-sm font-medium mr-2 -ml-3 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Out of Stock</span>
                }
                <img className="rounded-t-lg h-24 mx-auto p-2" src={photo || 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'} alt="" />

                <div className="p-5 text-sm">
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className='text-sm'>Price: {price}</p>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{description?.slice(0, 30) || 'Sample description will appear here'}</p>
                    <p>Available Qty: {quantity > 0 ? quantity : 'Out of Stock'}</p>
                    <p>Supplier: {supplier || 'N/A'}</p>
                    <Link to={`/inventory/${_id}`} className="inline-flex items-center py-2 px-3 mb-auto text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Product;