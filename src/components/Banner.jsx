import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/bannerImg.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container>
      <motion.div className="left">
        <motion.h3
          className="left"
          animate={{ x: 0 }}
          initial={{ x: -500 }}
          transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
        >
          Hello there, my name is
        </motion.h3>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            bounce: 0.3,
            type: "spring",
            delay: 0.7,
          }}
        >
          Tanu <br /> <h3 className="ln">Rana</h3>
        </motion.span>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{
            duration: 1,
            bounce: 0.3,
            delay: 1.7,
            type: "spring",
          }}
        >
          Software Developer & Analyst
        </motion.h1>
      </motion.div>
      <motion.img
        src={bannerImg}
        alt="Tanu Rana portfolio website banner image"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      />
    </Container>
  );
};
const Container = styled.div`
  padding: 10em 3%;
  color: var(--fontPrimaryColor);
  background: var(--backgroundGradient2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  transition: 0.4s;
  .left {
    h3 {
      font-weight: 300;
    }
    span {
      font-size: 6em;
      font-weight: 900;
      line-height: 1em;
      font-family: "Montserrat", sans-serif;
      .ln {
        font-weight: 900;
        color: var(--fontSecondaryColor);
      }
    }
    h1 {
      font-size: 2em;
      font-weight: 700;
      font-family: "Comfortaa", cursive;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  img {
    width: 44%;
    object-fit: cover;
  }
  @media (max-width: 880px) {
    .left {
      span {
        font-size: 5em;
      }
      h1 {
        font-size: 1.7em;
      }
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    .left {
      text-align: center;
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 560px) {
    img {
      width: 90%;
    }
  }
  @media (max-width: 400px) {
    .left {
      h1 {
        font-size: 1.4em;
      }
    }
    img {
      width: 90%;
    }
  }
`;

export default Banner;
