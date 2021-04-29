import React from 'react'
import {HCDAta} from "../Data/Home_Data"
import Counter from "../sections/Counter"
import {Switch,Route,useParams,useRouteMatch, Link} from "react-router-dom"
// import {useParams,} from "react-router-dom"
import BlogPostData from '../Data/BlogData'
import SinglePostDetail from "../sections/SinglePostDetail"
import Navbar from '../components/Navbar'
import ServicesFooter from '../sections/ServicesFooter'
function DetailedBlog({data}) {
    // const {id} = useParams()
    
    // const [post, setPost] = React.useState()
    // BlogPostData.map((data) => (data.id === id && setPost(data)))
    // console.log("post ->",post)
    return (
        <>
        <div className="wraper">
        <Navbar />
        <SinglePostDetail data={data}/>
        <Counter data={HCDAta} cls overlay />
        </div>
        <ServicesFooter />
        </>
    )
}

export default DetailedBlog
