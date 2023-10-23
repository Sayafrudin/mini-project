import React from "react";
import { Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";

export default function TourCard({ tours }) {
  const { id, title, city, photo, price, featured } = tours;

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          <span>Featured</span>
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-2">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price}
              <span> /per person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
