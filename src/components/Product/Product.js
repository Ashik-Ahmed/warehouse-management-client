import React from 'react';
import { Link } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti'

const Product = (props) => {

    const { _id, name, price, quantity, supplier, description, photo } = props.product;

    return (
        <div>

            <div className="max-w-sm text-left bg-white rounded-lg border h-full border-gray-200 shadow-md hover:scale-110 duration-500">

                <img className="rounded-t-lg h-28 mx-auto p-2" src={photo || 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'} alt="" />

                <div className='border-t-4 border-blue-400 h-fit flex-col '>
                    {
                        quantity > 0 ? ' ' : <span class="bg-yellow-300 text-yellow-800 text-sm font-medium mr-2 -ml-3 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Out of Stock</span>
                    }
                    <div className="p-5 text-sm">
                        <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p className='text-sm font-bold'>$ {price}</p>
                        <p className="mb-3 text-xs font-normal italic text-gray-700 dark:text-gray-400">{description?.slice(0, 40) || 'Sample description will appear here'}</p>
                        <p>Available: {quantity > 0 ? quantity : 'Out of Stock'}</p>
                        <p>Supplier: {supplier || 'N/A'}</p>

                    </div>
                    <div className='inline-flex justify-end border ml-5 items-center'>
                        <Link to={`/inventory/${_id}`} style={{ 'background': '#32C6D9' }} className="flex justify-end items-center gap-x-2 mb-2 py-2 px-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span><TiEdit /></span>
                            Update

                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;