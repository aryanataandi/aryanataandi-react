import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import resume from '../resume.pdf';

function Navbar() {
  const [hide, setHide] = useState(false);
  let prevScrollpos = window.pageYOffset;
  const controlNavbar = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setHide(false);
    } else {
      setHide(true);
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav
      className={
        hide
          ? 'navbar navbar-expand-md py-3'
          : 'navbar navbar-expand-md py-3 show'
      }
    >
      <div className="container-fluid my-container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="34" className='pb-1'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
        >
          <i className="fas fa-bars my-1 text-light"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text me-auto"></span>
          <ul className="navbar-nav mb-2 mb-md-0">
            <li className="nav-item ms-md-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-md-4 mt-2 mt-md-0">
              <Link to={resume} className="btn btn-outline-primary text-primary" target="_blank">
                Resume
              </Link>
            </li>
          </ul>
          {/* <button className="btn btn-outline-primary">Resume</button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
