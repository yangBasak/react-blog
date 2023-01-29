import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BlogForm = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title,
      content,
    }).then(()=>{
      navigate('/blogs')
    })
  };
  return (
    <>
      <div className="container">
        <h2>포스트 작성</h2>
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
            rows="20"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={onSubmit}>
          등록하기
        </button>
      </div>
    </>
  );
};

export default BlogForm;
