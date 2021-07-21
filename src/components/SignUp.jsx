import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export const SignUp = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // onSubmit();
  };
  return (
    <Card>
      <Card.Body>
      <Card.Header>Sign Up</Card.Header>
      {/* <Card.Title>Login</Card.Title> */}
        <Form>

        <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <input
              className="form-control"
              type="fullName"
              placeholder="Full Name"
              value={fullName}
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <input
              className="form-control"
              type="phone"
              placeholder="Phone Number"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="fullWidth" variant="info" type="submit" name="submit" onClick={(e) => handleLogin(e)}>
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
