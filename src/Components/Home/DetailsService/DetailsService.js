import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const DetailsService = () => {
    const { user } = useAuth();
    const { email, displayName } = user;
    const status = 'pending';
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { img, name, description, place, price } = service;

    // display service details
    useEffect(() => {
        const url = `https://sheltered-falls-76719.herokuapp.com/details/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    // get user information 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { phone, address, shipping, userName } = data;
        const orderInfo = { email, img, name, description, place, price, status, userName, phone, address, shipping };
        // console.log(orderInfo);
        axios.post('https://sheltered-falls-76719.herokuapp.com/orders', orderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Successfully Added');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="container my-3 row mx-auto">
                <div className="col-lg-6 col-md-6 col-12 bg-light p-5">
                    {
                        name ?
                            <div>
                                <div className="text-center mb-3">
                                    <img className="img-fluid" src={img} alt="" />
                                </div>
                                <div className="d-flex justify-content-around align-items-center p-lg-3 p-sm-1">
                                    <div>
                                        <h4>{name}</h4>
                                        <h5 className="text-primary">{place}</h5>
                                    </div>
                                    <div>
                                        <h4 className="text-danger">$ {price}</h4>
                                        <p><small>(per Person)</small></p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="text-center mt-3"><Spinner animation="border" variant="danger" /></div>
                    }

                </div>

                <div className="mx-auto col-lg-6 col-md-6 col-12 bg-dark p-5 rounded">
                    <div className="text-center text-white mb-5">
                        <h1>ORDER</h1>
                        <p>Are you ready to order?</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-3" type="text" value={displayName} {...register("userName")} required placeholder="User Name" />
                        <input className="form-control my-3" type="number" {...register("phone")} required placeholder="Phone" />
                        <textarea className="form-control my-3" {...register("address")} required placeholder="Address" />
                        <select className="form-control my-3" {...register("shipping", { required: true })}>
                            <option value="Urgent 5 Day Tour">Urgent 5 Day Tour</option>
                            <option value="7 Day Tour">7 Day Tour</option>
                            <option value="10 Day Tour">10 Day Tour</option>
                            <option value="15 Day Tour">15 Day Tour</option>
                        </select>

                        <button className="btn btn-primary w-100" type="submit"><span><i className="fas fa-cart-plus"></i></span> Order Now</button>
                    </form>
                </div>
            </div>
            <div className="container my-5">
                <hr />
                <div className="">
                    <h2>Overview</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    );
};

export default DetailsService;