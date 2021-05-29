import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <a href="#" className="navbar-brand">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/emploer">emploer</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/lifecikle">lifecikle</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;