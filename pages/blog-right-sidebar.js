import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const BlogRightSidebar = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Blog Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Right Sidebar" 
            /> 

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/images/blog/blog1.jpg" alt="Image" /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <ul>
                                                <li>10 April 2020</li>
                                                <li>
                                                    <Link href="#"><a>By Admin</a></Link>
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>2020 Insurance Trends And Possible Challenge</h3>
                                                </a>
                                            </Link>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/images/blog/blog2.jpg" alt="Image" /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <ul>
                                                <li>11 April 2020</li>
                                                <li>
                                                    <Link href="#"><a>By Admin</a></Link>
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Global Trends In The Life Insurance Industry</h3>
                                                </a>
                                            </Link>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/images/blog/blog3.jpg" alt="Image" /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <ul>
                                                <li>13 April 2020</li>
                                                <li>
                                                    <Link href="#"><a>By Admin</a></Link>
                                                </li>
                                            </ul>
                                        
                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Where And How To Watch Live Stream Today</h3>
                                                </a>
                                            </Link>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/images/blog/blog4.jpg" alt="Image" /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <ul>
                                                <li>14 April 2020</li>
                                                <li>
                                                    <Link href="#"><a>By Admin</a></Link>
                                                </li>
                                            </ul>
                                        
                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Strategy For Norway’s Peion To Fund Global</h3>
                                                </a>
                                            </Link>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/images/blog/blog5.jpg" alt="Image" /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <ul>
                                                <li>15 April 2020</li>
                                                <li>
                                                    <Link href="#"><a>By Admin</a></Link>
                                                </li>
                                            </ul>
                                        
                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Blackpool Polices Hunt For David Schwinger</h3>
                                                </a>
                                            </Link>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/images/blog/blog6.jpg" alt="Image" /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <ul>
                                                <li>16 April 2020</li>
                                                <li>
                                                    <Link href="#"><a>By Admin</a></Link>
                                                </li>
                                            </ul>
                                        
                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Where And How To Watch Live Stream Today</h3>
                                                </a>
                                            </Link>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
 
                                <div className="col-lg-12">
                                    <div className="page-navigation-area">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link href="#">
                                                    <a className="page-link page-links">
                                                        <i className='bx bx-chevrons-left'></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                            <Link href="#">
                                                <a className="page-link" href="#">1</a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className='bx bx-chevrons-right'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default BlogRightSidebar;