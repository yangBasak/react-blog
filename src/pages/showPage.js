import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
    const {id} = useParams();
    useEffect(()=>{
        getPost(id)
    },[id])// page 이동해야하니 id 기준으로 해야할 듯   
    
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res)=>{
            setPost(res.data)
            setLoading(false)
        })
    }

    const printDate = (timestamp) => {
        return new Date(timestamp).toLocaleString()
    }
    if(loading){
        return <LoadingSpinner />
    }

    return (
        <div>
            <div className="d-flex">
                <h1 className="flex-grow-1">{post.title}</h1>
                <div>
                    <Link to={`/blogs/${id}/edit`} className="btn btn-primary">수정</Link>
                </div>
            </div>
            <small className="text-muted">
                생성일시: {printDate(post.createAt)}
            </small>
            <hr></hr>
            <p>{post.content}</p>
        </div>
    )

}
export default ShowPage