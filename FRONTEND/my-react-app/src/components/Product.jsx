import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from "../redux/cartSlice";
import axios from 'axios';
import Productcard from "./Productcard";

const Product = () => {
    const [productsList, setProductsList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token'); // Use dynamic token from localStorage
            try {
                // Fetch products
                const productsRes = await axios.get("http://localhost:3000/getproducts");
                setProductsList(productsRes.data);

                // Fetch cart items and update Redux store
                const cartRes = await axios.get("http://localhost:3000/cart/get", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use dynamic token
                    }
                });
                dispatch(setCart(cartRes.data.products)); // Assuming `cartRes.data.products` is the cart items array
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div className="product-container">
            {productsList.map((item) => (
                <Productcard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Product;
