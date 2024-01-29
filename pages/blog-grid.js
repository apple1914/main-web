import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/_App/Footer';

const BlogGrid = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Blog Grid" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Grid" 
            /> 

            <BlogThreeGrid />
            
            <Footer />
        </>
    )
}

export default BlogGrid;