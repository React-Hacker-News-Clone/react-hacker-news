import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import firebase from "firebase";

import "./Navigation.css";

const Navigation = props => {
  const logout = () => {
    localStorage.clear();
    firebase.auth().signOut();
    props.history.push("/login");
  };

  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register" ||
    props.location.pathname === "/"
  ) {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            src="https://i.imgur.com/hfalU7U.png"
            alt="Hacker News Logo"
            className="hnlogo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/hackernews">
            Hacker News
          </Nav.Link>
          <Nav.Link as={NavLink} to="/usernews">
            User News
          </Nav.Link>
          <Nav.Link as={NavLink} to="/submit">
            Submit
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/login">
            Log in
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          src="https://i.imgur.com/hfalU7U.png"
          alt="Hacker News Logo"
          className="hnlogo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/hackernews">
          Hacker News
        </Nav.Link>
        <Nav.Link as={NavLink} to="/usernews">
          User News
        </Nav.Link>
        <Nav.Link as={NavLink} to="/submit">
          Submit
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link onClick={logout}>Log out</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
