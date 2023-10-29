import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Register.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

export default function Register() {
  const [credentials, setCredentials] = useState({
    userName: undefined,
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
            <div className="register__container d-flex justify-content-between">
              <div className="register__image">
                <img src={registerImg} alt="" />
              </div>
              <div className="register__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick} autoComplete="off">
                  <Form.Group>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
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
                    Buat Akun
                  </Button>
                </Form>
                <p>
                  Sudah punya akun? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
