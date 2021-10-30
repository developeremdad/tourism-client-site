import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        const url = `https://sheltered-falls-76719.herokuapp.com/orders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, user.email])
    const handleCheckIsDelted = () => {
        setIsDeleted(true);
    }

    return (
        <div className="bg-light p-5">
            <div className="container mx-auto row g-4">
                {
                    orders.map(order => (
                        <MyOrder
                            key={order._id}
                            order={order}
                            handleCheckIsDelted={handleCheckIsDelted}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MyOrders;