import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Atom from "../components/Atom"; // Atom bileşenini ekledim
import * as THREE from "three";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import brand2 from "../assets/images/brand2.png";

const Section = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  height: 100vh;
  scroll-snap-align: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;

`;

const Container = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  height: 100vh;
  box-sizing: border-box;
  scroll-snap-align: center;
  width: 100%;
  overflow: hidden;
  
  
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
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
    align-items: center;
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
`;


const Desc = styled.p`
font-family: "SatoshiMedium", sans-serif !important;

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
  font-family: "SatoshiMedium", sans-serif !important;
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

const ImgContainer = styled.div`
display:flex;

@media (max-width: 768px) {
  flex-direction:column
}
`
const Divide = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
padding: 90px 0 100px 0;
`

const Hero = () => {

  return (
    <Section>
      
      <Container  className="pt-6 md:pt-20 " >
        <div style={{ display: "flex", width: "100vw", maxWidth: "100vw" }}>
          <Divide>
            <img src={brand2} alt="Group-1" border="0" style={{ width: "50%", maxWidth: "100vw" }} />
          </Divide>

        </div>

        <ImgContainer className="-mt-16">
          <div style={{ flex: 1 }}>
            <img src={bg1} alt="Group-1" border="0" style={{ width: "100%", maxWidth: "100vw" }} />
          </div>
          <div style={{ flex: 1 }}>
            <img src={bg2} alt="Group-1" border="0" style={{ width: "100%", maxWidth: "100vw" }} />

          </div>
        </ImgContainer>
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
  sphere.scale.set(1.5, 1.5, 1.5); // Örneğin, 1.5 kat büyüttük.

  return <primitive object={sphere} />;
};
