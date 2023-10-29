import React from "react";
import "./../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../assets/images/video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.svg";
import Subtitle from "../shared/Subtitle";

import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle
                    id="subtitle"
                    subtitle={"Ketahui Sebelum Anda Pergi"}
                  ></Subtitle>
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Bepergian membuka pintu untuk menciptakan{" "}
                  <span className="highlight">kenangan</span>
                </h1>
                <p>
                  Selamat datang di perjalanan tak terlupakan! Bersama kami,
                  impian perjalanan Anda menjadi kenyataan. Dari petualangan
                  eksotis hingga pemandangan ikonik, kami membawa Anda ke
                  destinasi eksklusif yang memikat. Ciptakan kenangan abadi,
                  terinspirasi oleh keajaiban dunia, dan rayakan semangat
                  petualangan bersama kami. Perjalanan dimulai di sini!
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__img-box mt-4">
                <video autoPlay loop muted>
                  <source src={Video} type="video/mp4"></source>
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col
              lg="3"
              className="d-flex flex-column align-content-center justify-content-center"
            >
              <h5 className="section__subtitle">Layanan kami</h5>
              <h5 className="service__title">Menawarkan layanan terbaik</h5>
            </Col>
            <ServiceList></ServiceList>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"}></Subtitle>
              <h2 className="featured__tour-title">
                Tour unggulan kami
                <br />
              </h2>
            </Col>
            <FeaturedTourList></FeaturedTourList>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Pengalaman"}></Subtitle>
                <h2>
                  Dengan semua pengalaman kami
                  <br />
                  kami akan melayani anda
                </h2>
                <p>
                  Kami adalah tim profesional yang siap membuat perjalanan Anda
                  tak terlupakan. Dengan pengetahuan mendalam, kami pandu Anda
                  melintasi destinasi eksotis. Keindahan dunia, detail tak
                  terlewatkan, pengalaman tak terlupakan.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Perjalanan yang sukses</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Kliens reguler</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Tahun pengalaman</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img ms-5">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
