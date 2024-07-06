import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import img from "../assets/skillsImg.png";
import CV from "../assets/Tanu_CV.pdf";
import { AiOutlineCheck } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <Container>
      <motion.div
        ref={ref}
        className="right"
        variants={{
          hidden: { opacity: 0, y: 180 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
      >
        <h2 className="title">My Technical Skills</h2>
        <div className="rows">
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>React.JS</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Node JS</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>JavaScript</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>HTML & CSS</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>TypeScript</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>MYSQL</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Graph QL</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>RESTFUL APIs</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>JSON</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>XML</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Bootstrap</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>SOAP APIs</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>AWS</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Azure</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Prisma ORM</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Snowflake</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Jira</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Git/GitBash</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Bitbucket</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Confluence</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>PowerBI</h3>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Tableau</h3>
          </div>
        </div>
        <button>
          <a href={CV} download="Tanu_CV.pdf" className="link-styles">
            DOWNLOAD CV
          </a>
        </button>
      </motion.div>
      <img
        src={img}
        alt="Tanu Rana Portfolio website programming skills image"
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 7em 4%;
  background: var(--backgroundGradient3);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;
  img {
    width: 40%;
    max-width: 600px;
  }
  .right {
    width: 40%;
    .title {
      font-family: "Comfortaa", cursive;
      margin-bottom: 1em;
    }
    .rows {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 20px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 1em;
      width: 100%;
      .icon {
        color: green;
        font-size: 1.4em;
      }
    }
    button {
      font-size: 17px;
      padding: 14px 12px;
      border: none;
      background: none;
      border-bottom: 2px solid var(--fontPrimaryColor);
      margin-top: 17px;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        background: var(--secondaryBackgroundColor);
      }
    }
  }
  @media (max-width: 1270px) {
    .right {
      width: 54%;
    }
  }
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      display: none;
    }
    .title {
      text-align: center;
    }
    .right {
      width: 74%;
    }
    button {
      display: flex;
      margin: auto;
    }
  }
  @media (max-width: 720px) {
    .right {
      width: 90%;
    }
  }
  @media (max-width: 580px) {
    padding: 7em 1%;
    .right {
      width: 99%;
    }
  }
  @media (max-width: 500px) {
    padding: 7em 1%;
    .right {
      width: 99%;
      .rows {
        .row {
          h3 {
            width: 120px;
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .right {
      .rows {
        gap: 2em;
        .row {
          flex-direction: column;
          gap: 4px;
        }
      }
    }
  }
`;

export default Skills;
