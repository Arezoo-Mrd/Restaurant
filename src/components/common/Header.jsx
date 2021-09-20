import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = ({classes}) => {
    return ( 
        <header className={`main_menu home_menu ${classes}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  {" "}
                  <img src="img/logo.png" alt="logo" />{" "}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        خانه
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="about.html">
                        درباره ما
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="food_menu.html">
                        منوی غذا
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="chefs.html">
                        سرآشپزها
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="blog.html"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        وبلاگ
                      </NavLink>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <NavLink className="dropdown-item" to="blog.html">
                          وبلاگ
                        </NavLink>
                        <NavLink className="dropdown-item" to="single-blog.html">
                          Single blog
                        </NavLink>
                        <NavLink className="dropdown-item" to="elements.html">
                          Elements
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="contact.html">
                        تماس با ما
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <i className="fas fa-user-circle"></i>
                <div className="login-link">
                  <NavLink to="/login" activeStyle={{color: "#ff6426"}}>
                  ورود /
                  </NavLink>
                  <NavLink to="/register" activeStyle={{color: "#ff6426"}}>
                  عضویت
                  </NavLink>

                </div>
               
              </nav>
            </div>
          </div>
        </div>
      </header>
     );
}
 
export default Header;