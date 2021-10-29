import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, img, description, price, place } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 100)} <span className="text-warning">read more</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;