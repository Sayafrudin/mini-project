import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "react-bootstrap";

import weather from "../assets/images/weather.png";
import guide from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";

const serviceData = [
  {
    img: weather,
    title: "Prediksi Cuaca yang Akurat",
    desc: "Destinasi Impian, Cuaca Ideal: Kami Punya Keduanya, Jelajahi Dunia dengan Prediksi Cuaca yang Akurat, Nikmati Petualangan Tanpa Batasan Cuaca",
  },
  {
    img: guide,
    title: "Tour Guide Terbaik",
    desc: "Wisata yang Lebih Mendalam, Pengalaman yang Lebih Berarti, Petualangan yang Tidak Terlupakan dengan Tour Guide Profesional",
  },
  {
    img: customization,
    title: "Kustomisasi Penuh",
    desc: "Destinasi Unik, Perjalanan Anda, Berkendara Menurut Aturan Anda, Kustomisasi Destinasi Tanpa Batas",
  },
];

export default function ServiceList() {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item}></ServiceCard>
        </Col>
      ))}
    </>
  );
}
