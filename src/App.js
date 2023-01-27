import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/blogs" className="nav-link active" aria-current="page">
                  blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/"></Route>
          <Route path="/blogs" element={<BlogForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
