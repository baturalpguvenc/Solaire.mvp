import styled from "styled-components";
import TimeLine from "./sections/TimeLine";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Home from "./sections/Home";
import Who from "./sections/Who";
import Works from "./sections/Works";
import Participate from "./sections/Participate";
import './App.css';

const Container = styled.div`
  height: 100svh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: linear-gradient(135deg, #083432, #03AE5A, #00CF77, #FFF15F, #F6911D);
  color: white;

  h1 {
    font-family: "SatoshiBlack", sans-serif;
    font-size: 110pt;
    line-height: 99pt;
    /* letter-spacing: -10pt; */
    text-transform: uppercase;
  }

  h2 {
    font-family: "TerminaDemi", sans-serif;
    font-size: 20pt;
    line-height: 48pt;
    text-transform: uppercase;
  }

  h3 {
    font-family: "TerminaMedium", sans-serif;
    font-size: 26pt;
    line-height: 31.2pt;
    text-transform: none;
  }

  p {
    font-family: "SatoshiMedium", sans-serif;
    font-size: 26pt;
    line-height: 33.8pt;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Home>
        <h1>HEADLINES</h1>
      </Home>

      <Hero>
        <h1>HEADLINES</h1>
      </Hero>

      <Who >
        <h2>SUB-HEADERS</h2>
      </Who>

      <Participate>
      <h1>HEADLINES</h1>
      </Participate>

      <Works>
        <h3>2nd SUB-HEADERS OR HIGHLIGHTS</h3>
      </Works>

      <TimeLine>
      <h1>HEADLINES</h1>
      </TimeLine>
      
      <Contact>
        <p>BODY TEXT</p>
      </Contact>
    </Container>
  );
}

export default App;
