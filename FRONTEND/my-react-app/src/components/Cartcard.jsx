import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCart } from "../redux/cartSlice"; // Adjust the path if needed

const Cartcard = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const updateCartState = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get("http://localhost:3000/cart/get", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(setCart(response.data.products));
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const incrementItem = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(item.quantity);
      console.log(Number(item.quantity)+1)
      const payload = {
        productid: item.productid,
        quantity: Number(item.quantity) + 1 // Ensure this is a number
      };

      await axios.put(`http://localhost:3000/cart/${item.productid}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      updateCartState(); // Update Redux state after API call
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const decrementItem = async () => {
    if (item.quantity > 1) {
      try {
        const token = localStorage.getItem('token');
        const payload = {
          productid: item.productid,
          quantity: item.quantity - 1 // Ensure this is a number
        };

        await axios.put(`http://localhost:3000/cart/${item.productid}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        updateCartState(); // Update Redux state after API call
      } catch (error) {
        console.error('Error updating item quantity:', error);
      }
    }
  };

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.title} width={50} />
      <div>
        <div>
          {item.title}
          <p>id: {item.productid}</p>
        </div>
        <div className="quantity-container">
          <button onClick={decrementItem}>-</button>&nbsp;
          {item.quantity || 1}&nbsp;
          <button onClick={incrementItem}>+</button>
        </div>
        <div>${item.price}</div>
      </div>
    </div>
  );
};

export default Cartcard;
