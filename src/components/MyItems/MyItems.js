import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';

const MyItems = () => {

    const [user] = useAuthState(auth);

    const [myProducts, setMyProducts] = useProducts();
    const myItems = [];

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
                        const remaining = myProducts.filter(user => user._id !== id);
                        setMyProducts(remaining);
                    }
                })

        }

    }

    return (
        <div className='mt-16 mx-8'>
            <h2 className='font-bold'>Item list added by you</h2>
            {
                myProducts.map(item => {
                    if (item?.email === user?.email) {
                        myItems.push(item);
                    }
                })

            }
            < div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    {
                        myItems.map(product => {

                            return <>

                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {product.name}
                                        </th>
                                        <td class="px-6 py-4">
                                            <img className='w-8' src={product.img || 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'} alt="" />
                                        </td>
                                        <td class="px-6 py-4">
                                            $ {product.price}
                                        </td>
                                        <td class="px-6 py-4">
                                            {product.quantity}
                                        </td>
                                        <td class="px-6 py-4">
                                            {product.sold || 'N/A'}
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <button onClick={() => handleProductDelete(product._id)} class="font-medium text-white bg-red-600 p-2 rounded">Delete</button>
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

export default MyItems;