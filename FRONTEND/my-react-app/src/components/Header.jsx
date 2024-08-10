// components/Header.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCart } from '../redux/cartSlice';
import axios from 'axios';
const token = localStorage.getItem('token');
const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
 
    useEffect(() => {
        if(token){
            console.log("calling get card")
        getCart();}
    }, []);

    const getCart = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const res = await axios.get('http://localhost:3000/cart/get', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(setCart(res.data.products));
        }
    };

    return (
        <header>
            <div>LOGO</div>
            <nav>
                <div className="container">
                    <Link to="/">Products</Link>
                    <Link to="/signup">Signup</Link>
                    {token?<span>Logout</span>:<Link to="/login">Login</Link>}
                    <Link to="/cart">Cart: {cartItems.length}</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
