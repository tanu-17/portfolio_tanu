import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");
  const [pos, setPos] = useState("top");
  const location = useLocation();
  const pathname = location.pathname;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      // Clean up the event listener when the component unmounts
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const handleScroll = () => {
    let scrolled = window.scrollY;
    if (scrolled >= 5) {
      setPos("moved");
    } else {
      setPos("top");
    }
  };
  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname === "/services") {
      setActiveTab("services");
    } else if (pathname === "/projects") {
      setActiveTab("projects");
    } else if (pathname === "/projects/asites-agency") {
      setActiveTab("packages");
    } else if (pathname === "/packages") {
      setActiveTab("packages");
    } else if (pathname === "/about-me") {
      setActiveTab("about-me");
    }
  }, [pathname]);

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <Container
      ref={ref}
      style={
        pos === "top"
          ? { background: "rgba(0, 0, 0, 0)" }
          : { background: "var(--trBackgroundColor)" }
      }
    >
      <Link to={"/"} className="link-styles">
        <img
          className="logo"
          src={logo}
          alt="Tanu Rana Portfolio website Tanu Logo"
        />
      </Link>
      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        <Link to={"/"} className="link-styles">
          <motion.li
            variants={{
              hidden: { opacity: 0, y: -70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{
              duration: 0.4,
              delay: 0.4,
              type: "spring",
              bounce: 2,
            }}
            className={activeTab === "home" ? "activeTab" : "nonActive"}
          >
            Home
          </motion.li>
        </Link>
        <Link to={"/projects"} className="link-styles">
          <motion.li
            variants={{
              hidden: { opacity: 0, y: -70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{
              duration: 0.4,
              delay: 0.8,
              type: "spring",
              bounce: 2,
            }}
            className={activeTab === "projects" ? "activeTab" : "nonActive"}
          >
            Projects
          </motion.li>
        </Link>
        <Link to={"/about-me"} className="link-styles">
          <motion.li
            variants={{
              hidden: { opacity: 0, y: -70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{
              duration: 0.4,
              delay: 1,
              type: "spring",
              bounce: 2,
            }}
            className={activeTab === "about-me" ? "activeTab" : "nonActive"}
          >
            About Me
          </motion.li>
        </Link>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  backdrop-filter: blur(7px);
  color: var(--fontPrimaryColor);
  background: var(--trBackgroundColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 100;
  overflow-x: visible;
  transition: 0.2s;
  .logo {
    width: 180px;
    margin-top: 7px;
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: end;
    li {
      transition: 0.3s;
      cursor: pointer;
      :hover {
        color: var(--primaryColor);
      }
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 600;
    }
  }
  .mobile-menu {
    position: absolute;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .nav-menu {
      color: var(--fontPrimaryColor);
      background: var(--backgroundGradient2);
      width: 90%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: end;
      position: fixed;
      top: 0%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      border-left: 1px solid var(--fontSecondaryColor);
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 0%;
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 120px;
    }
  }
  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;
