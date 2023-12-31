import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Tour",
  },
  {
    path: "/about",
    display: "About",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Nikmati Petualangan Tanpa Batasan Cuaca bersama Tour Guide
                Terbaik & Rencanakan Setiap Detail Perjalanan Anda dengan
                Kustomisasi penuh
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-twitter-x-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discovery</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroup.Item as="li" key={index} className="ps-0 border-0">
                  <Link as="a" to={item.path}>
                    {item.display}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Link</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroup.Item as="li" key={index} className="ps-0 border-0">
                  <Link as="a" to={item.path}>
                    {item.display}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroup.Item className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address :
                </h6>
                <p className="mb-0">Manukan Lor, Surabaya</p>
              </ListGroup.Item>

              <ListGroup.Item className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email :
                </h6>
                <p className="mb-0">tripit@support.id</p>
              </ListGroup.Item>

              <ListGroup.Item className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone :
                </h6>
                <p className="mb-0">+62 0877-1111-1110</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
