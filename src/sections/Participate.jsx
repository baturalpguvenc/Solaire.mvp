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
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  padding: 80px 0 30px 30px;
  max-width: 31%;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    padding: 16px;
    max-width: 80%;
    margin-bottom:380px;
    flex-direction: column;
    background:rgba(155,255,255,0.2);
    backdrop-filter: blur(12px);
    border-radius:10px;
    margin-left:10px;
  }
  
`;
const P = styled.div`
  font-size: 20px ;
  font-weight: 300;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    font-size: 16px ;
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
      className="h-screen w-screen  bg-black flex flex-col X justify-start items-center"
      style={{
        backgroundImage: `url("${SolarPanel}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Section className="pt-20 md:pt-32 !justify-start" style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        color: 'white'

      }}>
        <Container className="flex w-full" style={{
          fontWeight: '300',
        }}>
          <h1 >Participate</h1>
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
