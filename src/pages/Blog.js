import React from "react"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import BlogPageSection from "../sections/BlogPageSection"
import ServicesFooter from "../sections/ServicesFooter"


const Blog = ()=>{
    
    return(
        <>
        <div className="wraper">
        <Navbar />
        <Banner heading="Blog post"/>
        <BlogPageSection />
        </div>
        <ServicesFooter />
        
        </>
    )
}

export default Blog