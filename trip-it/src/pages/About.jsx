import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="about">
              <span>
                <i className="ri-information-fill"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Ini About</h1>
              <Button className="btn primary__btn w-25">
                <Link to="/home">Kembali ke Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
