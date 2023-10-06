import styled from "styled-components";
import React, { useState } from "react";
//import forest from "../assets/images/logo.png";

import SolarPanel from "../assets/images/solar-panel.png" 

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Participate = () => {
  return (
    <div id={"participate"} style={{ backgroundImage: `url("${SolarPanel}")`, backgroundSize: "cover", backgroundPosition:"center" }}>
      <Section>
        <div >
          </div>
      </Section>
    </div>
  );
};

export default Participate;




















/*
<div id={"participate"}
      style={{ backgroundImage: `url("${logo}")`, backgroundSize: "cover" }}
    >
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <ListItem key={item} text={item} onClick={() => setWork(item)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>
            {work === "Logo Design" ? (
              <WebDesign />
            ) : work === "Development" ? (
              <Development />
            ) : (
              <ProductDesign />
            )}
          </Right>
        </Container>
      </Section>
    </div> . */

