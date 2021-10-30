import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, description, _id, price, place } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <h5>{name}</h5>
                            <h5 className="text-danger">$ {price}</h5>
                        </div>
                    </Card.Title>
                    <Card.Text>{description.slice(0, 100)} <span className="text-warning">read more</span></Card.Text>
                    <Link to={`/details/${_id}`}> <Button className="w-100">Tour in {place}</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;