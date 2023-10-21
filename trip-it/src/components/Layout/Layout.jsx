import React from "react";

import Header from "./../Header/Header";
import Routers from "../../router/Routers";
import Footer from "./../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
    </>
  );
}
