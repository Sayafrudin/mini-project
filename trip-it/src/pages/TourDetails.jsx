import React, { useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import avatar from "../assets/images/avatar.jpg";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";

export default function TourDetails() {
  const { id } = useParams();
  const reviesMsg = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tours = tourData.find((tours) => tours.id === id);

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
  } = tours;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //* Format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  //* Submit rating
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviesMsg.current.value;
  };

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
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                      <i className="ri-map-pin-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>${price}
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i>
                      {distance} k/m
                    </span>
                    <span>
                      <i className="ri-group-line"></i>
                      {maxGroupSize} orang
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <button onClick={() => setTourRating(1)}>
                        1 <i className="ri-star-fill"></i>
                      </button>
                      <button onClick={() => setTourRating(2)}>
                        2 <i className="ri-star-fill"></i>
                      </button>
                      <button onClick={() => setTourRating(3)}>
                        3 <i className="ri-star-fill"></i>
                      </button>
                      <button onClick={() => setTourRating(4)}>
                        4 <i className="ri-star-fill"></i>
                      </button>
                      <button onClick={() => setTourRating(5)}>
                        5 <i className="ri-star-fill"></i>
                      </button>
                    </div>
                    <div className="reviews__input">
                      <input
                        type="text"
                        ref={reviesMsg}
                        name=""
                        id=""
                        placeholder="Bagikan review anda"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((reviews) => (
                      <div className="reviews__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Udin</h5>
                              <p>
                                {new Date("10-24-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              <span>
                                5 <i className="ri-star-fill"></i>
                              </span>
                            </span>
                          </div>
                          <h6>Waah Tournya sangat lah Amazing</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tours={tours} avgRating={avgRating}></Booking>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
