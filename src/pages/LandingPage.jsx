import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FetchData from "../components/FetchData";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

function LandingPage() {
  return (
    <div className="box">
      <Container fluid>
        <Row>
          <Col>
            <Login />
          </Col>
          <Col>
            <SignUp />
          </Col>
          <Col><FetchData loader={false}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
