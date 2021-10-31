import React, { useEffect, useState } from 'react';

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
        const url = `http://localhost:5000/orders/${id}`;
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
        <div className="container mx-auto row g-4 border-bottom">
            <div className="col-lg-5 col-md-5 col-12">
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <p><small>{phone}</small></p>
                <p>${price}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
                <button onClick={() => handleUpdateStatus(_id)}>{status}</button>
                <button onClick={() => handleCancelOrder(_id)}>Delete</button>
            </div>
        </div >
    );
};

export default ManageOrder;