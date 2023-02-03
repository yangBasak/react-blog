import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {bool} from 'prop-types'

const BlogForm = ({editing}) => {
  const navigate = useNavigate()
  const {id} = useParams()

  const [title, setTitle] = useState("");
  const [orginalTitle, setOrginalTitle] = useState("");
  const [content, setContent] = useState("");
  const [orginalContent, setOrginalContent] = useState("");
  useEffect(()=>{
    if(editing){
      axios.get(`http://localhost:3001/posts/${id}`).then((res)=>{
        setTitle(res.data.title)
        setContent(res.data.content)
        setOrginalContent(res.data.content)
        setOrginalTitle(res.data.title)
      })
    }
  },[id, editing])

  const isEdited = () => {
    return title !== orginalTitle || content !== orginalContent
  };
  const onSubmit = () => {
    if(editing){
      axios.patch(`http://localhost:3001/posts/${id}`, {
      title,
      content,
    }).then((res)=>{
      setOrginalContent(res.data.content)
      setOrginalTitle(res.data.title)
      navigate(`/blogs/${id}`)
    })  
    }else{
      axios.post("http://localhost:3001/posts", {
        title,
        content,
        createAt: Date.now()
      }).then(()=>{
        navigate('/blogs')
      })
    }
  };
  return (
    <>
      <div className="container">
        <h2>{editing ? '포스트 수정':'포스트 작성'}</h2>
        <div className="mb-3">
          <label className="form-label">제목</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">내용</label>
          <textarea
            className="form-control"
            rows="10"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button 
          className="btn btn-primary" 
          onClick={onSubmit} 
          disabled={editing && !isEdited()}
        >
          
          {editing ? '수정하기':'등록하기'}
        </button>
      </div>
    </>
  );
};
BlogForm.propTypes = {
  editing: bool
}
BlogForm.defaultProps = {
  editing: false
}

export default BlogForm;
