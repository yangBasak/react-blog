import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Home</Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                    activeClassName="active"
                    to="/blogs" 
                    className="nav-link" 
                    aria-current="page"
                >
                  blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )

}

export default Navbar