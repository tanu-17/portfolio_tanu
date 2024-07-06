import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Tanu Rana | Portfolio";
  }, []);

  return (
    <Container>
      <Banner />
      <Experience />
      <Skills />
    </Container>
  );
};
const Container = styled.div`
  color: var(--fontPrimaryColor);
  transition: 0.4s;
`;

export default Home;
