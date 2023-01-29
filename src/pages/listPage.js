import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router'
import LoadingSpinner from "../components/LoadingSpinner"

const ListPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getPosts()
    },[])
    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((res)=>{
            setPosts(res.data)
            setLoading(false)
        })
    }
    const deletePost = (e, id) => {
        e.stopPropagation()
        axios.delete(`http://localhost:3001/posts/${id}`).then(()=>{
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
        })
        
    }
    const renderBlogList = () => {
        if(loading){
            return ( <LoadingSpinner /> )
        }
        if(posts.length === 0){
            return (
                <div>포스트가 없습니다.</div>
            )
        }

        return (
            posts.map((post)=>(
                <Card 
                    key={post.id} 
                    title={post.title} 
                    onClick={()=>navigate('/blogs/edit')}
                >
                    <div>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={(e)=>deletePost(e, post.id)}
                        >
                            삭제
                        </button>
                    </div>
                </Card>
            ))  
        )
               
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>포스트</h2>
                <div>
                    <Link to='/blogs/create' className="btn btn-success">글 생성</Link>
                </div>
            </div>
            {renderBlogList()}
        </div>
    )

}

export default ListPage