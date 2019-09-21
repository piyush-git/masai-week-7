import React from 'react';

function Navbar() {
  return (
    <div className="text-center">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="offset-lg-1">
                <a href="zerodha.com" className="">
                    <img className="logo-img" src="https://zerodha.com/static/images/logo.svg" alt="Zerodha logo" />
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-5" id="">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Products</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link mr-4" href="#" id="" role="button">
                        Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Support</a>
                    </li>
                    <li>
                        <button className="btn btn-primary mr-4" style={{height: '35px'}}>Sign Up</button>
                    </li>
                    <span className="navbar-toggler-icon ml-2"></span>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
