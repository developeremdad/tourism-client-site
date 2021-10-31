import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Services from '../Services/Services';
import './Home.css';
import hotel1 from '../../../images/hotel-1.jpg'
import hotel2 from '../../../images/hotel-2.jpg'
import hotel3 from '../../../images/hotel-3.jpg'

const Home = () => {
    return (
        <div>
            <BannerSection />

            {/* services section  */}
            <Services />

            {/* add hotels section */}
            <section className="hotel-container">
                <div className="container text-center hotel-header">
                    <h1 className="mb-3">POPULAR HOTELS</h1>
                    <p>They provide the luxury of living in the heart of the city without compromising on the views.</p>
                    {/* <p>services, calmness and tranquillity that you look for in an ideal hotel.</p> */}
                </div>
                <div className="container row mx-auto">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card mb-3 hotel-card overflow-hidden">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={hotel1} className="img-fluid rounded-start" alt="hotel" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Hotel Ritz Paris</h5>
                                        <p className="card-text">In the 21st century, the Ritz is ranked among the most luxurious hotel in the world and the most expensive in Paris.</p>
                                        <p className="card-text"><span className="text-danger fs-3 fw-bold">$135</span><small className="text-muted">  per night</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 hotel-card overflow-hidden">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={hotel2} className="img-fluid rounded-start" alt="hotel" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">The Shelbourne Hotel</h5>
                                        <p className="card-text">From February to May 1922, The Shelbourne played host to its most historic meetings: the drafting of Ireland's first Constitution.</p>
                                        <p className="card-text"><span className="text-danger fs-3 fw-bold">$165</span><small className="text-muted">  per night</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card hotel-card overflow-hidden">
                            <img src={hotel3} className="card-img-top" alt="hotel" />
                            <div className="card-body">
                                <h5 className="card-title">Burj Al Arab</h5>
                                <p className="card-text">The Burj al Arab Hotel or “Tower of the Arabs,” is said to be the world's only 7-star hotel, and is presently the third tallest hotel in the world.</p>
                                <p className="card-text"><span className="text-danger fs-3 fw-bold">$165</span><small className="text-muted">  per night</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end hotels section  */}

            {/* start Featured Adventures section  */}

            <section>
                <div className="container my-5 py-5">
                    <h2 className="my-4">Featured Adventures</h2>
                    <div className="row row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-1 g-2 g-lg-3">
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Sacred Kerala Tour</h6>
                                <p>10 days from <del>$1,119</del><span className="text-danger"> $1,007</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Jewels of India</h6>
                                <p>8 days from <del>$1,120</del><span className="text-danger"> $1,000</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Highlights of Scotland</h6>
                                <p>10 days from <span className="text-danger"> $1,150</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Galapagos Land</h6>
                                <p>12 days from <del>$1,825</del><span className="text-danger"> $1,550</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Best of Jordan</h6>
                                <p>5 days from <del>$915</del><span className="text-danger"> $850</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">5 Days Wonders</h6>
                                <p>15 days from <del>$2,159</del><span className="text-danger"> $2,000</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Bay of Islands</h6>
                                <p>30 days from <del>$3,780</del><span className="text-danger"> $3,510</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-light p-2 border rounded">
                                <h6 className="fw-bold">Sacred Kerala Tour</h6>
                                <p>9 days from <del> $1,423</del><span className="text-danger"> $1,127</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;