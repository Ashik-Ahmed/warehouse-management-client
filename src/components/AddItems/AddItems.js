import React from 'react';

const AddItems = () => {
    return (
        <div className='mt-16'>
            <h2>Adding Items</h2>
            <form>
                <input type="text" placeholder='Name' />
                <br />
                <input type="text" placeholder='Price' />
                <br />
                <input className='bg-blue-300 p-3 cursor-pointer' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddItems;