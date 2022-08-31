import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import resume from '../resume.pdf';

function Navbar() {
  const [hide, setHide] = useState(false);
  const [expand, setExpand] = useState(true);

  let prevScrollpos = window.pageYOffset;

  const controlNavbar = () => {
    let currentScrollPos = window.pageYOffset;
    let collapseMenu = document.getElementById('navbarMenu');
    let toggleMenu = document.getElementById('toggleMenu');
    let collapseTimeOut = () => {
      setTimeout(() => {
        collapseMenu.classList.remove('show');
      }, 300);
    };

    if (prevScrollpos > currentScrollPos) {
      setHide(false);
    } else {
      setHide(true);
      if (collapseMenu.classList.contains('show')) {
        collapseTimeOut();
        toggleMenu.classList.add('collapsed');
      }
    }

    prevScrollpos = currentScrollPos;
  };

  const navPosition = () => {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', navPosition);

    return () => {
      window.removeEventListener('scroll', navPosition);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md
        ${hide ? '' : 'show'}
        ${expand ? 'pt-5' : 'py-3'}
          `}
    >
      <div className="container-fluid my-container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width="34" className="pb-1" />
        </a>
        <button
          className="navbar-toggler collapsed"
          id="toggleMenu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <span className="navbar-text me-auto"></span>
          <ul className="navbar-nav my-2 my-md-0">
            <li className="nav-item ms-md-4 mt-2 mt-md-0">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ms-md-4 mt-2 mt-md-0">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ms-md-4 mt-2 mt-md-0">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-md-4 mt-3 mt-md-0">
              <Link
                to={resume}
                className="btn btn-outline-primary text-primary"
                target="_blank"
              >
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
