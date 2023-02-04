import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"
import { useLocation, useNavigate } from 'react-router'
import LoadingSpinner from "../components/LoadingSpinner"
import {bool} from 'prop-types'
import Pagination from "./Pagination"

const BlogList = ({isAdmin}) => {
    const navigate = useNavigate()
    const location = useLocation()//URL주소정보 가져오는거
    const params = new URLSearchParams(location.search) 
    const pageParam  = params.get('page')//쿼리스트링에서 페이지 번호
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPost, setTotalPost] = useState(0)
    const [totalPageNum, setTotalPageNum] = useState(0)
    const limit = 1

    useEffect(()=>{
        setTotalPageNum(Math.ceil(totalPost/limit))
    },[totalPost])

    const onClickPageBtn = (page) => { 
        navigate(`${location.pathname}?page=${page}`)
    }
    const getPosts = useCallback((page = 1) => {
        
        let params = {
            _page: page,
            _limit: limit,
            _sort: 'id',
            _order: 'desc',
        }
        if(!isAdmin){
            params = {...params, publish: true}
        }
        axios.get(`http://localhost:3001/posts`,{params}).then((res)=>{
            setTotalPost(res.headers['x-total-count'])
            setPosts(res.data)
            setLoading(false)
        })
    }, [isAdmin])
    useEffect(()=>{
        setCurrentPage(parseInt(pageParam) || 1)
        getPosts(parseInt(pageParam) || 1)
    },[pageParam, getPosts])

    const deletePost = (e, id) => {
        e.stopPropagation()
        axios.delete(`http://localhost:3001/posts/${id}`).then(()=>{
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
        })
        
    }

    if(loading){
        return ( <LoadingSpinner /> )
    }
    if(posts.length === 0){
        return (
            <div>포스트가 없습니다.</div>
        )
    }
const renderBlogList = () => {
    return posts.map((post)=>(
        <Card 
            key={post.id} 
            title={post.title} 
            onClick={()=>navigate(`/blogs/${post.id}`)}
        >
            {isAdmin ? (<div>
                <button 
                    className="btn btn-danger btn-sm"
                    onClick={(e)=>deletePost(e, post.id)}
                >
                    삭제
                </button>
            </div>) : null}
        </Card>
    ))
}
    return (
        <>
            <div>{renderBlogList()}</div>
            <Pagination currentPage={currentPage} totalPage={totalPageNum} onClick={onClickPageBtn}/>
        </>
          
    )
}

BlogList.propTypes = {
    isAdmin: bool
};

BlogList.defaultProps = {
    isAdmin: false
}

export default BlogList