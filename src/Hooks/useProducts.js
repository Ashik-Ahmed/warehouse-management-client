import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    // getting products from db 
    useEffect(() => {
        fetch('https://gentle-meadow-44621.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];

}

export default useProducts;