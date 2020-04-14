import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/homepage">Convert!</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="btn btn-primary my-2 my-sm-0" style={{color:"white", marginLeft:"0.5%"}} to="/add">Add new Currency!</Link>
            </div>
        </nav>
    );
}