import React, { useState } from "react";
import styled from "styled-components";
import Development from "../components/Development";
import ProductDesign from "../components/ProductDesign";
import WebDesign from "../components/WebDesign";
import forest from "../assets/images/solaire-jpg.jpg";

const data = ["Products"];

const Button = styled.button`

  background: linear-gradient(135deg, #000080, #008000);
  color: white;
  font-family: "SatoshiMedium", sans-serif !important;
  font-weight: lighter;
  width: 200px;
  font-size: 26px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Section = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

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
font-family: "SatoshiMedium", sans-serif !important;

  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 0px;
    justify-content: center;
    flex-direction:column;
  }
`;

const List = styled.ul`
font-family: "SatoshiMedium", sans-serif !important;

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    margin-top:48px;
  }
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  font-family: "SatoshiMedium", sans-serif !important;
  color: white;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display:hidden;
  }
`;

const Paragraph = styled.p`
font-size: 0px !important;
line-height:20px !important;
background:rgba(255,255,255,0.15);
backdrop-filter: blur(24px);
margin:16px;
border-radius:6px;
padding:0px;
color:#fff;

@media only screen and (max-width: 768px) {
  font-size: 16px !important;
  padding:8px;
}
`

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div id={"works"} className=""
      style={{ backgroundImage: `url("${forest}")`, backgroundSize: "cover" }}
    >
      <Section className="pt-6 md:pt-20 overflow-y-auto">
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <h1 className="text-white" key={item} text={item} onClick={() => setWork(item)}>
                  {item}
                </h1>
              ))}
            </List>
            <Paragraph className="!text-xs md:text-sm">
              <b> Green Bitcoin Mining </b>
              <br />

              Sittaris generates the energy used for Bitcoin mining with solar panels that are placed on top of our greenhouses and we have over 1 GWp in development across Europe and emerging markets, making us a sustainable force in the crypto mining industry. Sittaris offers investing opportunities in an innovative approach, with returns in Bitcoin (BTC) while supporting a greener future for cryptocurrency mining.
              <br />
              <br />
              <b> Proof of Energy </b>

              <br />
              Sittaris generates the energy used for Bitcoin mining with solar panels that are place on top of greenhouses. Trio Investment BV is an investment
              company that invests in sustainable energy in Europe and emerging markets. With Sittaris they offer investment opportunities with returns in bitcoin and euros.

              Sittaris uses blockchain technology to introduce a trustless framework known as "Proof of Energy" (“POE”) for transparently verifying the source
              and quantity of energy generated. Energy generated in our solar parks is sold back to the grid or channeled into a green-mining setup to generate Bitcoin.

              <br />
              <br />
              At the core of our operations, we not only achieve zero emissions but also zero waste through the efficient use of excess mining-generated heat in our greenhouses.


            </Paragraph>


          </Left>
          <Right className="hidden md:block">
            <ProductDesign />

          </Right>
        </Container>
      </Section>

    </div>
  );
};

export default Works;
