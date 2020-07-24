import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-header-nav" />
      <Navbar.Collapse id="main-header-nav">
        <Nav className="mr-auto">
          <Nav.Link  as={Link} to="/">All Streams</Nav.Link>
          <Nav.Link as={Link} to="/streams/new" >New Stream</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
