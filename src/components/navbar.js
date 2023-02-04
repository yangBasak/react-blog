import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Home</Link>
          <div>
            <ul 
              className="navbar-nav"
              style={{flexDirection: 'row'}}  
            >
              <li className="nav-item me-2">
                <NavLink 
                    activeClassName="active"
                    to="/admin" 
                    className="nav-link" 
                    aria-current="page"
                >
                  관리자
                </NavLink>
              </li>
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