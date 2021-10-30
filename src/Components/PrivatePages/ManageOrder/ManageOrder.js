import React from 'react';

const ManageOrder = (props) => {
    const { name, email, phone, price, status, _id } = props.order;

    const handleUpdateStatus = id => {
        console.log(id);
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
                <button>Delete</button>
            </div>
        </div >
    );
};

export default ManageOrder;