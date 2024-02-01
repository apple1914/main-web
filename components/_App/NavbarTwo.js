import React from 'react';
import Link from 'next/link';
import SignInOutButton from "../Common/SignInOutButton"
// import TopHeader from './TopHeader';
import { useTranslation } from 'next-i18next'

const NavbarTwo = () => {
    const {t} = useTranslation("common")

    const [menu, setMenu] = React.useState(true)
    const [sidebarModal, setSidebar] = React.useState(false)
    const toggleSidebarModal = () => {
        setSidebar(!sidebarModal)
    }
   
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <header className="header-area fixed-top">
                {/* TopHeader */}
                {/* <TopHeader /> */}
                ß
                <div id="navbar" className="navbar-area nav-style-two">
                    <div className="main-nav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link href="/" onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/santepay-logo.png" alt="logo" height={100} width={100}/>
                                </Link>

                                <button 
                                    onClick={toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        

                                        <li className="nav-item">
                                            <Link onClick={toggleNavbar} className="nav-link" href="/about" activeClassName="active">
                                            {t("About")}
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#" onClick={e => e.preventDefault()} className="nav-link">
                                                    Pages <i className='bx bx-chevron-down'></i>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/team" activeClassName="active">
                                                        Team
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/pricing" activeClassName="active">
                                                        Pricing
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/testimonials" activeClassName="active">
                                                        Testimonials
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="#">
                                                            User <i className='bx bx-chevron-down'></i>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link onClick={toggleNavbar} className="nav-link" href="/sign-up" activeClassName="active">
                                                                Sign Up
                                                            </Link>
                                                        </li> 

                                                        <li className="nav-item">
                                                            <Link onClick={toggleNavbar} className="nav-link" href="/sign-in" activeClassName="active">
                                                                Sign In
                                                            </Link>
                                                        </li> 

                                                        <li className="nav-item">
                                                            <Link onClick={toggleNavbar} className="nav-link" href="/recover-password" activeClassName="active">
                                                                Recover Password
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/faq" activeClassName="active">
                                                       FAQ
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/coming-soon" activeClassName="active">
                                                       Coming Soon
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/terms-conditions" activeClassName="active">
                                                       Terms & Conditions
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/privacy-policy" activeClassName="active">
                                                       Privacy Policy
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/404" activeClassName="active">
                                                       404 Error Page
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link onClick={e => e.preventDefault()} className="nav-link" href="#">
                                                    Insurance <i className='bx bx-chevron-down'></i>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/travel-insurance" activeClassName="active">
                                                        Travel Insurance
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/business-insurance" activeClassName="active">
                                                        Business Insurance
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/health-insurance" activeClassName="active">
                                                        Health Insurance
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/car-insurance" activeClassName="active">
                                                        Car Insurance
                                                    </Link>
                                                </li>
    
                                                <li className="nav-item">
                                                    <Link onClick={toggleNavbar} className="nav-link" href="/insurance-details" activeClassName="active">
                                                        Insurance Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        


                                        <li className="nav-item">
                                            <Link onClick={toggleNavbar} className="nav-link" href="/contact" activeClassName="active">
                                            Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="others-option">
                                    <div className="option-item">
                                        <SignInOutButton/>
                                        
                                    </div>


                             
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            
        
            {/* Sidebar Modal */}
            <div className={`sidebar-modal ${sidebarModal ? 'active' : null}`}>  
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title">
                                    <Link href="/">
                                    <img src="/images/logo2.png" alt="Logo" />
                                    </Link>
                                </h2>

                                <button type="button" className="close" onClick={e => {e.preventDefault(); toggleSidebarModal()}}>
                                    <span aria-hidden="true">
                                        <i className="bx bx-x"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="sidebar-modal-widget">
                                    <h3 className="title">About Us</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores doloribus eum laboriosam praesentium delectus unde magni aut perspiciatis cumque deserunt dolore voluptate, autem pariatur.</p>
                                </div>

                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Additional Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/sign-up">
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/log-in">
                                                Log In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Contact Info</h3>

                                    <ul className="contact-info">
                                        <li>
                                            <i className="bx bx-location-plus"></i>
                                            Address
                                            <span>123, Western Road, Melbourne Australia</span>
                                        </li>
                                        <li>
                                            <i className="bx bx-envelope"></i>
                                            Email
                                            <a href="mailto:hello@flexa.com">hello@flexa.com</a>
                                        </li>
                                        <li>
                                            <i className="bx bxs-phone-call"></i>
                                            Phone
                                            <a href="tel:+822456974">+822456974</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Connect With Us</h3>

                                    <ul className="social-list">
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i className='bx bxl-youtube'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarTwo;


