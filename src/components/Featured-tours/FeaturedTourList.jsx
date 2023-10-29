import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "react-bootstrap";

export default function FeaturedTourList() {
  return (
    <>
      {tourData?.map((tours) => (
        <Col lg="4" className="mb-4" key={tours.id}>
          <TourCard tours={tours} />
        </Col>
      ))}
    </>
  );
}
