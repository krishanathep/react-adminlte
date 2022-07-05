import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function Sidebar() {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
         <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" className="brand-link">
            <img
              src={process.env.PUBLIC_URL+"/assets/dist/img/AdminLTELogo.png"}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </Link>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={process.env.PUBLIC_URL+"/assets/dist/img/profile.png"}
                  className="img-circle elevation-2"
                  alt=""
                />
              </div>
              <div className="info">
                <Link to="#" className="d-block">
                  {user.name}
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to="/"  className="nav-link">
                    <i className="nav-icon fa fa-home" />
                    <p>Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blank" className="nav-link">
                    <i class="nav-icon fas fa-file" />
                    <p>Blank</p>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a href="#" className="nav-link" onClick={signOut}>
                    <i className="nav-icon fas fa-sign-out-alt" />
                    <p>Sign out</p>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </aside>
        <aside class="control-sidebar control-sidebar-light"></aside>
    </div>
  )
}
