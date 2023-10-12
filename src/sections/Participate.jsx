import styled from "styled-components";
import React, { useState } from "react";
//import forest from "../assets/images/logo.png";

import SolarPanel from "../assets/images/parti2.png";

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
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  padding: 80px 0 30px 30px;
  max-width: 31%;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 60px 0 20px 20px;
    max-width:75%;
    flex-direction: column;
  }
`;
const P = styled.div`
  font-size: 20px ;
  font-weight: 300;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    font-size: 14px ;
  }
`;
const H = styled.div`
  font-size: 30px ;
  font-weight: 600;
  text-aling: left;
  @media only screen and (max-width: 768px) {
    font-size: 20px ;
  }
`;
const Head = styled.div`
  font-size: 52px ;
  font-weight: 600;
  text-aling: left;
  @media only screen and (max-width: 768px) {
    font-size: 26px ;
  }
`;

const Participate = () => {
  return (
    <div
      id={"participate"}
      style={{
        backgroundImage: `url("${SolarPanel}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <Section style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        color: 'white'
        
      }}>
        <Container className="" style={{
          
          
          fontWeight: '300',
        }}>
          <Head >Participate</Head>
          <H>Participate in Green BTC Mining</H>
          <P>
            You can participate in the future expansion of the Sittaris network.
            The expansion of the Sittaris services - energy storage, grid
            connection and heat production is anticipated for Q1 - 2024.
          </P>
          <H>Investment Opportunities</H>
          <P>
            Become a sustainable bitcoin miner yourself. Your returns will be in
            BTC.
          </P>
        </Container>
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
