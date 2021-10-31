import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`https://i.ibb.co/KmfS7VB/Group-of-man-and-woman-enjoy-camping-picnic-and-barbecue-at-lake-with-tents-in-background-Young-mixe.jpg`} className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block curosal-title">
                            <h1>Adventure, Your Way</h1>
                            <p> matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`https://i.ibb.co/zXHw0NL/banner-1.jpg`} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block curosal-title">
                            <h1>ADVENTURE AWAITES</h1>
                            <p>Choose from thousands of organised travel adventures.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`https://i.ibb.co/RYD8Xdc/banner-2.jpg`} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block curosal-title">
                            <h1>CALL OUR AGENTS TO BOOK</h1>
                            <p>Tripo Award Winning and Top Rated Tour Operator</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default BannerSection;