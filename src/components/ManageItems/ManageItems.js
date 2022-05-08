import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { MdDeleteForever, MdAdd } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

const ManageItems = () => {

    const [products, setProducts] = useProducts();

    const handleProductDelete = (id) => {

        const proceed = window.confirm("Are you sure??");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(user => user._id !== id);
                        setProducts(remaining);
                    }
                })

        }

    }


    return (
        <div className='mt-16 mx-8'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold mx-auto'>Available Products: {products.length}</h2>
                <div className='flex mr-3'>
                    <span><Link to='/add' className='flex items-center bg-violet-500 text-white  rounded p-1'> <span className='text-lg font-extrabold'><MdAdd /></span> Add new Item</Link></span>
                </div>
            </div>
            {/* products.map(product => <p key={product._id}> <span>{product.name}</span> - <span>{product.price}</span> - <span>{product.quantity}</span></p>) */}



            < div class="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product photo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Available Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Sold
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        products.map(product => {

                            return <>

                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {product.name}
                                        </th>
                                        <td class="px-6 py-1">
                                            <img className='w-8' src={product.photo || 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'} alt="" />
                                        </td>
                                        <td class="px-6 py-1">
                                            $ {product.price}
                                        </td>
                                        <td class="px-6 py-1">
                                            {product.quantity > 0 ? product.quantity : 'Out of Stock'}
                                        </td>
                                        <td class="px-6 py-1">
                                            {product.sold > 0 ? product.sold : 0}
                                        </td>
                                        <td class="px-6 py-1 text-right">
                                            <div className='flex gap-x-3'>
                                                <Link to={`/inventory/${product._id}`}>
                                                    <button style={{ 'background': '#32C6D9' }} class="flex items-center gap-x-2 font-medium text-white p-2 rounded"><span><TiEdit /></span>  Edit </button></Link>
                                                <button onClick={() => handleProductDelete(product._id)} class="flex items-center font-medium text-white bg-red-600 p-2 rounded"><span className='text-lg'><MdDeleteForever /></span> Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        })
                    }
                </table>
            </div>



        </div >
    );
};

export default ManageItems;