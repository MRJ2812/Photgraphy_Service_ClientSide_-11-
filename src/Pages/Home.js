import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banare1 from '../Assets/imaiges/i1.jpg';
import banare2 from '../Assets/imaiges/i2.jpg';
import banare3 from '../Assets/imaiges/i3.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillAlarmFill, BsFillEmojiSmileFill, BsFillPersonCheckFill, IconName } from "react-icons/bs";
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../Hook/useTitle';

const Home = () => {
    useTitle('Home');

    const [index, setIndex] = useState(0);
    const Services = useLoaderData();

    const { user } = useContext(AuthContext);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>

            {/* Carosel */}
            <div className='mb-5'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-5"
                            src={banare1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banare2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banare3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* section */}
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Featurtes</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><BsFillAlarmFill></BsFillAlarmFill> </svg>
                        </div>
                        <h3 class="fs-2">24/7 Support</h3>
                        <p>Customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.</p>

                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><BsFillPersonCheckFill></BsFillPersonCheckFill> </svg>
                        </div>
                        <h3 class="fs-2">Professional</h3>
                        <p>We are honest professionals who understand the importance of knowing our business, exceeding expectations and avoiding politics along the way.</p>

                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><BsFillEmojiSmileFill></BsFillEmojiSmileFill> </svg>
                        </div>
                        <h3 class="fs-2">Customer Satisfaction</h3>
                        <p>Customer satisfaction information, including surveys and ratings, can help a company determine how to best improve or changes its products and services.</p>

                    </div>
                </div>
            </div>

            {/* Service Card */}
            <div className='row g-2'>
                <h2 class="pb-2 border-bottom">Services</h2>
                {
                    Services.map(Services =>
                        <div key={Services._id} className='my-4  col-lg-12 col-12 col-md-12'>
                            <div class="card mb-3" style={{ width: '100%' }}>
                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <PhotoProvider>
                                            <PhotoView src={Services.picture}>
                                                <img src={Services.picture} style={{ width: '300px', height: '180px' }} class="img-fluid rounded-start" alt="..." />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </div>



                                    <div class="col-md-9 ">
                                        <div class="card-body ">
                                            <h4 class="card-title" style={{ color: "tomato" }}>{Services.name}</h4>
                                            <h5 class="card-title">Price: {Services.price}</h5>
                                            <p class="card-text">{(Services.about).slice(0, 100)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to='/sevices'><Button variant="primary" className='btn-lg mb-5'>See all</Button></Link>
        </div >
    );
};

export default Home;