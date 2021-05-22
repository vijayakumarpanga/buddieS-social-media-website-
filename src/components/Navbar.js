import React from 'react';
import PropTypes from 'prop-types';
import '../css/navbar.css'
Navbar.propTypes = {
    
};

function Navbar(props) {
    return (
        <div className="nav">
            <div className="left-div">
                    <img className="logo" src="https://image.flaticon.com/icons/png/512/1189/1189206.png" alt="logo"></img>
                    <span style={{fontSize:'50px'}}>buddieS</span>   

            </div>
            <div className="search-container">
                <img className="search-icon" src="https://image.flaticon.com/icons/png/128/152/152536.png" alt="search-icon"></img>
                <input type='text' placeholder="Search" ></input>
                <div className="search-results">
                    <ul>
                        <li className="search-results-row">
                            <img src="https://image.flaticon.com/icons/png/128/848/848043.png" alt ="user-dp"></img>
                            <span >User name</span>
                        </li>
                        <li className="search-results-row">
                            <img src="https://image.flaticon.com/icons/png/128/848/848043.png" alt ="user-dp"></img>
                            <span >User name</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-nav" >
                <div className="user">
                    <img src="https://image.flaticon.com/icons/png/128/848/848043.png" alt ="user-dp" id="user-dp"></img>
                     <span>User name</span>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Log in</li>
                        <li>Log out</li>
                        <li>Register</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;