import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        fetch('https://sheltered-falls-76719.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, isUpdate])
    const handleCheckIsDelted = () => {
        setIsDeleted(true);
    }
    const updateStatus = () => {
        setIsUpdate(true);
    }
    return (
        <div>
            <div className="bg-light p-5 my-5">
                {
                    orders.length
                        ?
                        orders.map(order => (
                            <ManageOrder
                                order={order}
                                key={order._id}
                                handleCheckIsDelted={handleCheckIsDelted}
                                updateStatus={updateStatus}
                            />
                        ))
                        :
                        <h2 className="text-center text-warning">Order Not Found</h2>
                }
            </div>
        </div>
    );
};

export default ManageOrders;