import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export const Login = ({ onSubmit }) => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // onSubmit();
    const user = {email,password}
    return user;
  };
  return (
    <Card>
      <Card.Body>
      <Card.Header>Sign In</Card.Header>
      {/* <Card.Title>Login</Card.Title> */}
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => updateEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => updatePassword(e.target.value)}
            />
          </Form.Group>

          <Button className="fullWidth" variant="info" type="submit" name="submit" onClick={(e) => handleLogin(e)}>
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
