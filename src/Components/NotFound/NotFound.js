import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="p-5 text-center">
                <h1 style={{
                    fontSize: "90px"
                }} className="text-danger">Oops!</h1>
                <h5>404 - PAGE NOT FOUND</h5>
                <p>The page you are looking fo might have been removed had</p>
                <p>its name changed of is tepmorarily unavailable.</p>
                <Link to="/home"><button className="btn-primary">GO TO HOMEPAGE</button></Link>
            </div>
        </div>
    );
};

export default NotFound;