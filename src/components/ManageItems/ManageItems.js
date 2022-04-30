import useProducts from '../../Hooks/useProducts';

const ManageItems = () => {

    const [products, setProducts] = useProducts();


    return (
        <div className='mt-16'>
            <h2 className='font-bold'>Available Products: {products.length}</h2>
            {
                products.map(product => <p key={product._id}> <span>{product.name}</span> - <span>{product.price}</span> - <span>{product.quantity}</span></p>)
            }
        </div>
    );
};

export default ManageItems;