import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Tour",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/chat",
    display: "Chat AI",
  },
];

export default function Header() {
  const headerRef = useRef(null);

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();
    return window.removeEventListener("scroll", stickyHeaderFunction);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* LOGO */}
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt=""></img>
              </Link>
            </div>
            {/* LOGO */}

            {/* Nav Link */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Nav Link */}

            {/* Login & Register */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn ">
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">
                    <span>Register</span>
                  </Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
            {/* Login & Register */}
          </div>
        </Row>
      </Container>
    </header>
  );
}
