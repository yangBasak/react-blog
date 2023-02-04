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
  const [publish, setPublish] = useState(false);
  const [orginalPublish, setOrginalPublish] = useState(false);
  useEffect(()=>{
    if(editing){
      axios.get(`http://localhost:3001/posts/${id}`).then((res)=>{
        setTitle(res.data.title)
        setContent(res.data.content)
        setOrginalContent(res.data.content)
        setOrginalTitle(res.data.title)
        setPublish(res.data.publish)
        setOrginalPublish(res.data.publish)
      })
    }
  },[id, editing])

  const isEdited = () => {
    return title !== orginalTitle || content !== orginalContent || publish !== orginalPublish
  };
  const onSubmit = () => {
    if(editing){
      axios.patch(`http://localhost:3001/posts/${id}`, {
      title,
      content,
      publish
    }).then((res)=>{
      setOrginalContent(res.data.content)
      setOrginalTitle(res.data.title)
      navigate(`/blogs/${id}`)
    })  
    }else{
      axios.post("http://localhost:3001/posts", {
        title,
        content,
        publish,
        createAt: Date.now()
      }).then(()=>{
        navigate('/admin')
      })
    }
  };
  const goBack = () => {
    if (editing) navigate(`/blogs/${id}`)
    else navigate(`/blogs`)
    
  }
  const onChangePublish =  (e) => {
    setPublish(e.target.checked)
  }
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
        <div className="form-check mb-3">
          <input 
            className="form-check-input"
            type="checkbox" 
            checked={publish}
            onChange={onChangePublish}
          />
          <label className="form-check-label">공개발행</label>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={onSubmit} 
          disabled={editing && !isEdited()}
        >
          
          {editing ? '수정하기':'등록하기'}
        </button>
        <button 
          className="btn btn-danger ms-2"
          onClick={goBack}
        >
          취소
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
