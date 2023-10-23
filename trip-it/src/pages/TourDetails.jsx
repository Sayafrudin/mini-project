import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";

export default function TourDetails() {
  const { id } = useParams();

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "orange" }}
                      ></i>
                      {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>
                      {price}
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
