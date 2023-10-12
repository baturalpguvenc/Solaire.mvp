import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Atom from "../components/Atom"; // Atom bileşenini ekledim
import * as THREE from "three";

const Section = styled.div`
font-family: "SatoshiMedium", sans-serif !important;
height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  
  box-sizing: border-box;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 2px 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-family: "SatoshiMedium", sans-serif !important;
  font-size: 50pt !important;
  line-height: 1.2 !important;
  text-align: justify !important;
  text-justify: distribute-all-lines !important;

  @media only screen and (max-width: 768px) {
    text-align: justify !important;
    text-justify: distribute-all-lines;
    font-size: 30pt !important;
  }

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  margin-bottom: 20px; /* Adjust the margin as needed to increase space */
`;

const WhatWeDo = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
font-family: "SatoshiMedium", sans-serif !important;

  height: 5px;
`;

const Subtitle = styled.h2`
font-family: "SatoshiMedium", sans-serif !important;

  font-weight: bold;
  color: #000000
  ;
  font-size: 12px;
  margin-bottom: 20px !important; /* Adjust the margin as needed to create more space */

  @media (max-width: 768px) {
    font-size: 24px !important;
    line-height: 1.6 !important; 
  }
`;


const Desc = styled.p`
font-family: "SatoshiMedium", sans-serif !important;

  font-size: 22px !important;
  color: white;
  text-align: justify !important;
  line-height: 1.3 !important; /* Metinler arasındaki boşluğu daraltmak için line-height değerini ayarlayabilirsiniz. Deneme yanılma yoluyla doğru değeri bulabilirsiniz. Örneğin, 1.2 genellikle iyi bir başlangıçtır. */

  @media only screen and (max-width: 768px) {
    padding: 0px;
    font-size: 18px !important;
    line-height: 1.6 !important; 
  }
`;

const Button = styled.button`
font-family: "SatoshiMedium", sans-serif !important;

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
font-family: "SatoshiMedium", sans-serif !important;

  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 3;
    width: 100%;
    margin-top:40px;
  }
`;


const Img = styled.img`
font-family: "SatoshiMedium", sans-serif !important;

  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {

  return (
    <Section className="flex flex-col h-screen justify-center overflow-y-auto 2xl:overflow-hidden items-start ">
      
      <Container className="!pt-24 md:pt-24 px-12 !pb-12 h-fit md:h-full text-justify flex items-center !justify-start pt">
        <div id={"home"} />
        <Left className="">
          <h1>Zero-emission <br />
            Zero-waste 
                </h1>
          <WhatWeDo>
            <h2 className="text-black">Solar Powered Blockchain</h2>
          </WhatWeDo>
          <p>The Sittaris Project is a new endeavor that unites state-of-the-art technologies to redefine the landscape of energy production and Bitcoin mining. Our primary commitment revolves around sustainability, zero-waste, zero-emission, and eco-consciousness.</p>
          
        </Left>
        <Right className="h-fit w-5/6 aspect-square">
          <Canvas className="!w-full h-fit aspect-square">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sun />
              <Atom />
            </Suspense>
          </Canvas>
          <Img className="w-1/3" src="./img/Sittaris_3.png" />
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

  // Büyüklüğü artırmak için scale özelliğini kullanın
  sphere.scale.set(1,1,1); // Örneğin, 1.5 kat büyüttük.

  return <primitive object={sphere} />;
};
