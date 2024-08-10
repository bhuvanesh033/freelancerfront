import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addItem } from '../redux/cartSlice';

const Productcard = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.find((ele) => ele.id === props.item.id);
    const dispatch = useDispatch();

    const handleAdd = async () => {
        const token = localStorage.getItem('token'); // Use dynamic token from localStorage
        const payload = {
            productid: props.item.id,
            quantity: 5,
        };
        try {
            const res = await axios.post("http://localhost:3000/cart/add", payload, {
                headers: {
                    Authorization: `Bearer ${token}`, // Use dynamic token
                },
            });
            console.log(res);
            dispatch(addItem(props.item));
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <div className="Products-card">
            <img src={props.item.image} alt={props.item.title} />
            <h3>{props.item.title}</h3>
            <p className="description">{props.item.description}</p>
            <p className="price">$ {props.item.price}</p>
            <p>{props.item.id}</p>
            {isInCart ? (
                <Link to="/cart">
                    <button className='primary-btn'>Go to Cart</button>
                </Link>
            ) : (
                <button onClick={handleAdd}>Add to Cart</button>
            )}
        </div>
    );
};

export default Productcard;
