import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const DetailsService = () => {
    const { user } = useAuth();
    const { email } = user;
    const status = 'pendding';
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { img, name, description, place, price } = service;

    useEffect(() => {
        const url = `http://localhost:5000/details/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    // get user information 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { phone, address, shipping } = data;
        const orderInfo = { email, img, name, description, place, price, status, phone, address, shipping };
        console.log(orderInfo);
        axios.post('http://localhost:5000/orders', orderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully inserted');
                    reset();
                }
            })
    }
    return (
        <div className="container my-3">
            <div className="text-center">
                <img src={img} alt="" />
            </div>
            <div className="d-flex justify-content-lg-between ">
                <h2>{name}</h2>
                <h4>{place}</h4>
                <h4>{price}</h4>
            </div>
            <hr />
            <div className="">
                <h2>Overview</h2>
                <p>{description}</p>
            </div>

            <div className="mx-auto form-container my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control my-3" type="number" {...register("phone")} required placeholder="Phone" />
                    <textarea className="form-control my-3" {...register("adress")} required placeholder="Address" />
                    {/* <input className="form-control my-2" type="submit" /> */}
                    <select className="form-control my-3" {...register("shipping", { required: true })}>
                        <option value="Urgent Delivary">Urgent Delivary</option>
                        <option value="Any Time">Any Time</option>
                    </select>

                    <button className="btn btn-primary w-100" type="submit"><span><i className="fas fa-cart-plus"></i></span> Order Now</button>
                </form>
            </div>
        </div>
    );
};

export default DetailsService;