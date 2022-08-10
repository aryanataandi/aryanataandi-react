import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

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
    <nav className={hide ? 'navbar navbar-expand-sm py-3' : 'navbar navbar-expand-sm py-3 show'}>
      <div className="container-fluid my-container">
        <Link className="navbar-brand" to="/">
          Ampersand.
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText">
          <i className="fas fa-bars my-1 text-light"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mb-2 mb-sm-0">
            <li className="nav-item ms-sm-2">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ms-sm-2">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <span className="navbar-text me-auto"></span>
          <button className="btn btn-outline-primary">Coming Soon!</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
