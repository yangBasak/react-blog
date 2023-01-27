import { useState } from "react";

function App() {
  const [title, setTitle] = useState('')
  
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">제목</label>
        <input className="form-control" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} />
      </div>
      <button className="btn btn-primary">
        등록하기
      </button>
    </div>
  );
}

export default App;
