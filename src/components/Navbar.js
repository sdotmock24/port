import React from 'react'
//React Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav col-md-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">How Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
