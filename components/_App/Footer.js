import React from 'react';
import Link from 'next/link';
import { Toaster } from "react-hot-toast";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                        <img src="/images/logo2.png" alt="Image" />
                                </Link>

                                <p>Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="bx bxl-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i className="bx bxl-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Contact Us</h3>

                                <ul>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Hotline:</span> 
                                        <a href="tel:+822456974">
                                            Phone: +822456974
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:hello@flexa.com">
                                            hello@flexa.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="flaticon-maps-and-flags"></i>
                                        <span>Address:</span> 
                                        123, Western Road, Melbourne Australia
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Service Links</h3>

                                <ul>
                                    <li>
                                        <Link href="/insurance-details">
                                        Insurance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/car-insurance">
                                        Car Insurance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home-insurance">
                                        Home Insurance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/insurance-details">
                                            Investment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/health-insurance">
                                            Health Insurance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-insurance">
                                            Business
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Newsletter</h3>

                                <p className="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                <div className="subscribe-wrap">
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
                                        <button className="default-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	
            <div className="footer-bottom-area footer-bottom-electronics-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy;{currentYear} Flexa Designed By <a href="https://envytheme.com/" target="blank">EnvyTheme</a></p>
                    </div>
                </div>
            </div>
            <Toaster/>

        </>
    );
}

export default Footer;