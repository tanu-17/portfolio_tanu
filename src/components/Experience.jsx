import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import experienceImg from "../assets/experienceImg.png"; // Adjust path as needed
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";

const experiences = [
  {
    title: "Data Analyst Intern - iConsult Collaborative, Syracuse University",
    period: "March 2024 – Present",
    details: [
      "Engaged in collaborative data modeling efforts, working directly with clients...",
      "Spearheaded comprehensive data cleaning and preprocessing initiatives...",
    ],
  },
  {
    title: "Software Developer - Publicis Sapient, Gurugram, Haryana, India",
    period: "April 2021 – June 2023",
    details: [
      "Collaborated with a team of 7 to create payment connector...",
      "Integrated payment methods and transaction flow...",
      "Designed and developed features of the tool...",
      "Improved the security of the application handling the vulnerabilities.",
    ],
  },
  {
    title: "Sales and Marketing Intern - Flynote, Bengaluru, India",
    period: "June 2019 – May 2020",
    details: [
      "Managed social media and advertising with the marketing team...",
      "Monitored 10,000 leads and administered the overall flow of the customer experience.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
      <img
        src={experienceImg}
        alt="Professional work environment illustration"
      />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 180 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
        className="experience-details"
      >
        <h1>Work Experience</h1>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="experience">
              <h3 onClick={() => toggleDetails(index)}>{experience.title}</h3>
              <p>{experience.period}</p>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {experience.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  padding: 7em 4%;
  display: flex;
  align-items: flex-start;
  gap: 4em;
  background: var(--backgroundGradient3); // Adjust to match your theme
  img {
    width: 40%;
    max-width: 600px;
  }
  h1 {
    font-family: "Comfortaa", cursive;
    font-weight: 600;
    margin-bottom: 90px;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .experience-details {
    width: 60%;
    .timeline {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #ccc; // Adjust the color to fit your theme
      }
      .experience {
        position: relative;
        padding-left: 40px;
        margin-bottom: 50px;
        cursor: pointer;
        h3 {
          margin: 0.5em 0;
          color: #2c0380; // Theme color for clickable items
        }
        p {
          font-style: italic;
          color: #666; // Less emphasis on date
        }
        ul {
          list-style: inside square;
          padding-left: 20px;
        }
        li {
          margin-bottom: 0.5em;
        }
      }
    }
  }
`;

export default Experience;
