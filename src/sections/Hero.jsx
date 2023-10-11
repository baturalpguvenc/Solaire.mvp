import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Atom from "../components/Atom"; // Atom bileşenini ekledim
import * as THREE from "three";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  padding: 112px 96px 0;
  box-sizing: border-box;
  scroll-snap-align: center;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "SatoshiMedium", sans-serif !important;
  font-size: 50pt !important;
  text-align: justify !important;
  text-justify: distribute-all-lines !important; /* Bu stil, tek satır başı olan metinlerde daha etkili olacaktır. */

  @media only screen and (max-width: 768px) {
    text-align: justify !important;
    text-justify: distribute-all-lines;
  }

  user-select: none;
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari and Chrome */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;



const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  font-weight: "bold";
  color: #083432;
  font-size: 12px;
`;

const Desc = styled.p`
  font-size: 22px !important;
  color: white;
  text-align: justify !important;
  line-height: 1.3 !important; /* Metinler arasındaki boşluğu daraltmak için line-height değerini ayarlayabilirsiniz. Deneme yanılma yoluyla doğru değeri bulabilirsiniz. Örneğin, 1.2 genellikle iyi bir başlangıçtır. */

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #000080, #008000);
  color: white;
  font-family: monospace !important;
  font-weight: lighter;
  width: 200px;
  font-size: 26px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {

  return (
    <Section>
      <Navbar />
      <Container>
        <div id={"home"} />
        <Left>
          <Title>Zero-emission
            Zero-waste 
                </Title>
          <WhatWeDo>
            <Subtitle>Solar Powered Blockchain</Subtitle>
          </WhatWeDo>
          <Desc>The Sittaris Project is a new endeavor by Trio Investment BV that unites state-of-the-art technologies to redefine the landscape of energy production and Bitcoin mining. Our primary commitment revolves around sustainability, zero-waste, zero-emission and eco-consciousness. Investment opportunities
Become a sustainable bitcoin miner yourself. Your returns will in BTC and Euros.</Desc>
          <Button>
          <a href="https://qr.page/g/1SKuSTAhsDB" target="_blank">
      One Pager
    </a>
          </Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sun />
              <Atom />
            </Suspense>
          </Canvas>
          <Img src="./img/Sittaris_2.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

const Sun = () => {
  const color = new THREE.Color("#FDB813");
  const geometry = new THREE.IcosahedronGeometry(2, 15);
  const material = new THREE.MeshBasicMaterial({ color: color });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(0, 0, 0);

  return <primitive object={sphere} />;
};