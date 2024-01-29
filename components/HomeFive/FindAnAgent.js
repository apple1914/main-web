import React from 'react';
import Link from 'next/link';

const FindAnAgent = () => {
    return (
        <>
            <div className="find-an-agent-area pb-100">
                <div className="container">
                    <div className="find-an-agent-bg">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="find-an-agent-content">
                                    <h2>Get a Quick Quote</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, debitis dicta, tempore obcaecati facere in saepe rem, recusandae sapiente nobis esse.</p>

                                    <Link href="/contact">
                                        <a className="default-btn btn-five">
                                            Find An Agent
                                        </a>
                                    </Link>
                                </div>
                            </div>
        
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i className="bx bx-home"></i>
                                            <Link href="/insurance-details">
                                                <a>
                                                    Home
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i className="bx bx-car"></i>
                                            <Link href="/insurance-details">
                                                <a>
                                                    Auto
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i className="bx bxs-business"></i>
                                            <Link href="/insurance-details">
                                                <a>
                                                    Business
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i className="bx bxs-plane"></i>
                                            <Link href="/insurance-details">
                                                <a>
                                                    Travel
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i className="bx bx-user-circle"></i>
                                            <Link href="/insurance-details">
                                                <a>
                                                    Life
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i className="bx bx-book-reader"></i>
                                            <Link href="/insurance-details">
                                                <a>
                                                    More
                                                </a>
                                            </Link>
                                        </div>
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

export default FindAnAgent;