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
  padding: 20px;
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
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
font-family: "SatoshiMedium", sans-serif !important;

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  font-family: "SatoshiMedium", sans-serif !important;
  color: white;
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div id={"works"}
      style={{ backgroundImage: `url("${forest}")`, backgroundSize: "cover" }}
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
      <ProductDesign />
      
    </Right>
  </Container>
</Section>

    </div>
  );
};

export default Works;
