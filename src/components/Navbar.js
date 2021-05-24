import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/navbar.css";
import auth from "../reducers/auth";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
Navbar.propTypes = {};

function Navbar(props) {
  const logout =()=>{
  localStorage.removeItem('token')
   props.dispatch(logoutUser())
  }
  
  return (
    
    <div className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            className="logo"
            src="https://image.flaticon.com/icons/png/512/1189/1189206.png"
            alt="logo"
          ></img>
          <span style={{ fontSize: "50px" }}>buddieS</span>
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/png/128/152/152536.png"
          alt="search-icon"
        ></img>
        <input type="text" placeholder="Search"></input>
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/png/128/848/848043.png"
                alt="user-dp"
              ></img>
              <span>User name</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/png/128/848/848043.png"
                alt="user-dp"
              ></img>
              <span>User name</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        {props.auth.isLoggedIn&&<div className="user">
          <Link to='/UserProfile'>
          <img
            src="https://image.flaticon.com/icons/png/128/848/848043.png"
            alt="user-dp"
            id="user-dp"
          ></img>
          </Link>
          <span>{props.auth.user.name}</span>
        </div>}
       
        <div className="nav-links">
          <ul>
            {!props.auth.isLoggedIn&&<li>
              <Link to="/login">Log in</Link>
            </li>}
              {props.auth.isLoggedIn&&<li>
              <Link onClick= {logout} to="/login">Log out</Link>
            </li>}
          
            {!props.auth.isLoggedIn&&<li>
              <Link to="./signUp"> Register</Link>
            </li>}
            
          </ul>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {auth : state.auth}
}

export default connect(mapStateToProps)(Navbar);
