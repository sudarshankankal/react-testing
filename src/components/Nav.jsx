import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Nav() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>React Unit Testing (Jest/Enzyme)</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
