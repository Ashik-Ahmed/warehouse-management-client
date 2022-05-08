import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { MdDeleteForever, MdAdd } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

const ManageItems = () => {

    // getting the products 
    const [products, setProducts] = useProducts();


    // delete a product from db and ui 
    const handleProductDelete = (id) => {

        const proceed = window.confirm("Are you sure??");
        if (proceed) {
            const url = `https://gentle-meadow-44621.herokuapp.com/product/${id}`;

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

            {

                products.length > 0 ?
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

                    :
                    <div class="text-center flex justify-center items-center h-screen">
                        <svg role="status" class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
            }





        </div >
    );
};

export default ManageItems;