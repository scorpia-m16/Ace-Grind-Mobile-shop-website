import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'GH₵';
    const delivery_fee = 50;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, storage) => {

        if (!storage) {
            toast.error('Select Product Storage Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][storage]) {
                cartData[itemId][storage] += 1;
            }
            else {
                cartData[itemId][storage] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][storage] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId, storage }, { headers: { token } });

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const storage in cartItems[itemId]) {
                totalCount += cartItems[itemId][storage];
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, storage, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][storage] = quantity;

        setCartItems(cartData);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId, storage, quantity }, { headers: { token } })

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo) { // Check if itemInfo is defined
                for (const item in cartItems[items]) {
                    try {
                        if (cartItems[items][item] > 0) {
                            totalAmount += itemInfo.price * cartItems[items][item];
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            } 
        }
        return totalAmount;
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const getUserCart = async (token) => {
        try {

            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, []);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;