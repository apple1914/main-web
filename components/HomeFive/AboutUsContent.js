import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <>
            <div className="about-area about-area-five pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>Proud of 15 Years Excellence</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reiciendis qui veritatis in dolores ea id quia eos minima. Odio esse ut libero.</p>	

                                <Link href="/about">
                                    <a className="default-btn btn-five">
                                        About More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="excellence-item">
                                        <i className="bx bx-task"></i>
                                        <h3>Experienced</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum placeat</p> 
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-sm-6">
                                    <div className="excellence-item">
                                        <i className="bx bx-collapse"></i>
                                        <h3>Flexible Benefits</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum placeat</p> 
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="excellence-item">
                                        <i className="bx bx-user-circle"></i>
                                        <h3> Professional Staff</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum placeat</p> 
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="excellence-item">
                                        <i className="bx bx-check-square"></i>
                                        <h3>Trusted Since 2005</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum placeat</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsContent;