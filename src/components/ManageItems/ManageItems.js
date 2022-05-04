import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageItems = () => {

    const [products, setProducts] = useProducts();


    return (
        <div className='mt-16'>
            <h2 className='font-bold'>Available Products: {products.length}</h2>
            <Link to='/add' className='bg-blue-400 rounded px-1 font-semibold'>Add new Item</Link>
            {
                products.map(product => <p key={product._id}> <span>{product.name}</span> - <span>{product.price}</span> - <span>{product.quantity}</span></p>)
            }
        </div>
    );
};

export default ManageItems;