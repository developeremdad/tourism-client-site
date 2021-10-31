import React, { useEffect, useState } from 'react';
import './ManageOrder.css';

const ManageOrder = (props) => {
    const { name, email, phone, price, status, _id } = props.order;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-falls-76719.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // update status when click button 
    const handleUpdateStatus = id => {
        const updatedStatus = { status: 'Complete' };
        const url = `https://sheltered-falls-76719.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Update Successful');
                    props.updateStatus();
                }
            })
    }

    // manage or delete a order 
    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure! You want to Cancel and  Delete?');
        if (proceed) {
            const url = `https://sheltered-falls-76719.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully Complete');
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                        props.handleCheckIsDelted();
                    }
                });
        }
    }
    return (
        <div className="container mx-auto row manage-container py-3 shadow">
            <div className="col-lg-5 col-md-5 col-12">
                <p className="text-primary fs-5"><span><i className="fas fa-plane-departure me-2 text-dark"></i></span>{name}</p>
                <p><span><i className="fas fa-envelope me-2"></i></span>{email}</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <p><small><span><i className="fas fa-phone-alt me-2"></i></span>{phone}</small></p>
                <p className="text-danger fs-5"><span><i className="fas fa-dollar-sign me-2 text-dark"></i></span>${price}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-12 d-flex align-items-center">
                <button className="update-btn" onClick={() => handleUpdateStatus(_id)}>{status}</button>
                <button className="delete-btn" onClick={() => handleCancelOrder(_id)}><span><i className="fas fa-times"></i></span></button>
            </div>
        </div >
    );
};

export default ManageOrder;