import React, { useState, useEffect } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCurrentDate } from "../utils/date";
import axios from "axios";
import tourData from "../assets/data/tours";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";

export default function TourDetails() {
  const { id } = useParams();

  const tours = tourData.find((tours) => tours.id === id);

  const { photo, title, desc, price, address, city, distance, maxGroupSize } =
    tours;

  //* Format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  const [formData, setFormData] = useState({
    review: "",
  });

  const [editID, setEditID] = useState();
  const { review } = formData;
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review) {
      axios
        .post("https://653d33b3f52310ee6a99fc92.mockapi.io/rating", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({ review: "" });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = () => {
    if (review) {
      axios
        .put(
          `https://653d33b3f52310ee6a99fc92.mockapi.io/rating/${editID}`,
          formData
        )
        .then((res) => {
          setFormData({ review: "" });
          setRefresh(refresh + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (deleteID) => {
    axios
      .delete(`https://653d33b3f52310ee6a99fc92.mockapi.io/rating/${deleteID}`)
      .then((res) => {
        console.log("DELETE RECORD::::", res);
        setRefresh(refresh + 1);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (editIDNotState) => {
    axios
      .get(
        `https://653d33b3f52310ee6a99fc92.mockapi.io/rating/${editIDNotState}`
      )
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://653d33b3f52310ee6a99fc92.mockapi.io/rating")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
    // console.log(data);
  }, [refresh]);

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
                  <h4>Reviews</h4>
                  <Form onSubmit={handleSubmit}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <button>
                        1 <i className="ri-star-fill"></i>
                      </button>
                      <button>
                        2 <i className="ri-star-fill"></i>
                      </button>
                      <button>
                        3 <i className="ri-star-fill"></i>
                      </button>
                      <button>
                        4 <i className="ri-star-fill"></i>
                      </button>
                      <button>
                        5 <i className="ri-star-fill"></i>
                      </button>
                    </div>
                    <div className="reviews__input">
                      <input
                        type="text"
                        name="review"
                        id="review"
                        value={review}
                        onChange={handleChange}
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

                  {data.map((item, index) => (
                    <ListGroup className="user__reviews " key={index}>
                      <div className="reviews__item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Anonymouse</h5>
                              <p>{getCurrentDate("-", options)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              <span>
                                5 <i className="ri-star-fill"></i>
                              </span>
                            </span>
                          </div>
                          <h6>{item.review}</h6>
                          <button
                            className="btn__edit"
                            onClick={() => {
                              handleEdit(item.id);
                              setEditID(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="submit"
                            className="btn__update"
                            onClick={() => {
                              handleUpdate();
                            }}
                          >
                            Update
                          </button>
                          <button
                            className="btn__delete"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>{" "}
                        </div>
                      </div>
                    </ListGroup>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tours={tours}></Booking>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
