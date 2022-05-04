import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { _id, name, price, quantity, supplier, description, photo } = props.product;

    return (
        <div>

            <div className="max-w-sm text-left bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="https://media.cnn.com/api/v1/images/stellar/prod/210922153639-best-smartphones-lead.jpg?q=x_0,y_54,h_2082,w_3701,c_crop/h_720,w_1280" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <p>Price: {price}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description || 'Sample description will appear here'}</p>
                    <p>Available Qty: {quantity}</p>
                    <p>Supplier: {supplier || 'N/A'}</p>
                    <Link to={`/inventory/${_id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Product;