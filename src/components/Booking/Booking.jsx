import React, { useState } from "react";
import "./booking.css";
import { Form, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Booking({ tours, avgRating }) {
  const { price, reviews } = tours;

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "Example@example.com",
    fullName: "",
    phone: "",
    tamu: 1,
    date: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.tamu) + Number(serviceFee);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
    // console.log(credentials);
  };
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per orang</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill" style={{ color: "orange" }}></i>5
        </span>
      </div>
      <div className="booking__form">
        <h5>Information</h5>
        <Form
          className="booking__info-form"
          onSubmit={handleClick}
          autoComplete="off"
        >
          <Form.Group>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Nama Lengkap"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="No. Telp"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex align-items-center gap-3">
            <input
              type="date"
              name="date"
              id="date"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="tamu"
              id="tamu"
              placeholder="Tamu"
              min="1"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </div>
      <div className="booking__bottom">
        <ListGroup>
          <ListGroup.Item as="li" className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 orang
            </h5>
            <span>${price}</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="border-0 px-0">
            <h5>Biaya layanan</h5>
            <span> ${serviceFee} </span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="total border-0 px-0">
            <h5>Total</h5>
            <span> ${totalAmount} </span>
          </ListGroup.Item>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book now
        </Button>
      </div>
    </div>
  );
}
