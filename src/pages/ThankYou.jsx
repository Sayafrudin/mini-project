import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/thank-you.css";

export default function ThankYou() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i class="ri-checkbox-circle-fill"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Terimakasih</h1>
              <h3 className="mb-4">Tour anda suda dipesan</h3>
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
