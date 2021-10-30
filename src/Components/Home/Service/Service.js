import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, description, _id } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 100)} <span className="text-warning">read more</span></Card.Text>
                    <Link to={`/details/${_id}`}> <Button>Book Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;