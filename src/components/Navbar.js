import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <Nav className="justify-content-center">
        <Nav.Item className="App-link">
          <Nav.Link href="/categories">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item className="App-link">
          <Nav.Link href="/recipes">Recipes</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
