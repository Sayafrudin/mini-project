import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__image">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <Form.Group>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button className="btn secondary__btn auth__btn">
                    Login
                  </Button>
                </Form>
                <p>
                  Tidak punya akun? <Link to="/register">Daftar</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
