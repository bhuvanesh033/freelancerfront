// App.jsx
import Header from './components/Header';
import Product from './components/Product';
import Signup from './components/Signup';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homelayout from './components/Homelayout';
import Cart from './components/Cart';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    useEffect(() => {
        getCart();
    }, []);

    const getCart = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const res = await axios.get('http://localhost:3000/cart/get', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res);
        }
    };

    return (
        <Provider store={store}>
            <BrowserRouter>
            <ToastContainer />
                <Header />
                <Routes>
                    <Route path="/" element={<Homelayout />}>
                        <Route path="/" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
