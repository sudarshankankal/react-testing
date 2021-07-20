import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export const SignUp = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
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

        <Form.Group className="mb-3" controlId="userName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="userName"
              placeholder="Username"
              value={userName}
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Phone Number"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
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
