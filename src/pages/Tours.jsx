import React from "react";
import CommonSection from "../components/shared/CommonSection";

import tourData from "../assets/data/tours";
import TourCard from "../components/shared/TourCard";
import { Container, Col, Row } from "react-bootstrap";

export default function Tours() {
  return (
    <>
      <CommonSection title={"Semua Tour"}></CommonSection>
      <section>
        <Container>
          <Col>
            <Row>
              {tourData?.map((tours) => (
                <Col lg="4" className="mb-4" key={tourData.id}>
                  <TourCard tours={tours}></TourCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Container>
      </section>
    </>
  );
}
