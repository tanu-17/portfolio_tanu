import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import asites from "../../assets/homePageAssets/ASites Agency.png";
// import travelo from "../../assets/homePageAssets/Travelo.png";
// import theTastyTable from "../../assets/homePageAssets/The Tasty Table.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <Container>
      <div className="title">
        <h1>Recent Projects</h1>
        <p>Exploring a Selection of My Diverse Creations</p>
      </div>
      <div className="projects">
        <Link to={"/projects/asites-agency"} className="link-styles">
          <motion.div
            ref={ref}
            className="project"
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
          >
            {/* <img
              src={asites}
              alt="Amir Tahiri Portfolio website ASites Agency image"
            /> */}
            <h3>ASites Agency</h3>
            <p>
              ASites Agency is my own angecy. It a service-based agency where we
              help small and medimum businesses grow online through Websites,
              Social Media, Marketing, Content Creation etc.
            </p>
          </motion.div>
        </Link>
        <Link to={"/projects/travelo"} className="link-styles">
          <motion.div
            className="project"
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          >
            {/* <img
              src={travelo}
              alt="Amir Tahiri Portfolio website Travelo project image"
            /> */}
            <h3>Travelo</h3>
            <p>
              Travelo is a Travel Agnecy website I recently developed. It
              provides an amazing design and can 100% be used as a SaaS. It also
              provides everything a travel agnecy website needs, including
              booking systems.
            </p>
          </motion.div>
        </Link>
        <Link to={"/projects/the-tasty-table"} className="link-styles">
          <motion.div
            className="project"
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{ duration: 0.7, delay: 1, type: "spring" }}
          >
            {/* <img
              src={theTastyTable}
              alt="Amir Tahiri Portfolio website The Tasty Table image"
            /> */}
            <h3>The Tasty Table</h3>
            <p>
              The Tasty Table is a website I built only for design, it doesnt
              have any functinalities, or any backend, the client only wanted
              the desigm, so that's what I did. It also provides 2 themes and
              animations.
            </p>
          </motion.div>
        </Link>
      </div>
      <Link to={"/projects"}>
        <h4>See All...</h4>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 2%;
  background: var(--primaryBackgroundColor);
  .title {
    text-align: center;
    h1 {
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: "Comfortaa", cursive;
      font-weight: 600;
    }
    p {
      width: 60%;
      margin: auto;
      margin-top: 1em;
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 2em;
    .project {
      width: 380px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        margin: auto;
        display: flex;
        width: 100%;
        box-shadow: 12px 12px 19px var(--shadowColor1),
          -12px -12px 19px var(--shadowColor2);
        transition: 0.4s;
        :hover {
          transform: scale(1.04);
        }
      }
      h3 {
        margin-top: 1.4em;
        font-weight: 600;
        font-family: "Comfortaa", cursive;
        color: var(--fontPrimaryColor);
      }
      p {
        padding: 10px;
        text-align: center;
        color: var(--fontPrimaryColor);
        font-weight: 200;
        font-size: 15px;
      }
    }
  }
  h4 {
    text-align: right;
    margin-right: 7%;
    margin-top: 2em;
    font-weight: 400;
    font-family: "Comfortaa", cursive;
    cursor: pointer;
    color: var(--fontSecondaryColor);
    :hover {
      color: var(--fontPrimaryColor);
    }
  }
  @media (max-width: 810px) {
    .projects {
      flex-direction: column;
      .project {
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 8%;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 7em 4%;
    .projects {
      .project {
        width: 99%;
        padding: 0 1%;
      }
    }
  }
`;

export default Projects;
