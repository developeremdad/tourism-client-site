import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-center bg-dark py-4 text-white">Our Services</h1>

            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;