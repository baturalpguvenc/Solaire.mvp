import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div`
  width: 360px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            {/* <Solar color="purple" /> */} {/* Solar bileşenine color prop'u eklendi */}
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Sittaris generates the energy used for Bitcoin mining with solar panels that are place on top of greenhouses. Trio Investment BV is an investment
         company that invests in sustainable energy in Europe and emerging markets. With Sittaris they offer investment opportunities with returns in bitcoin and euros.

        Sittaris uses blockchain technology to introduce a trustless framework known as "Proof of Energy" (“POE”) for transparently verifying the source 
        and quantity of energy generated. Energy generated in our solar parks is sold back to the grid or channeled into a green-mining setup to generate Bitcoin.
         At the core of our operations, we not only achieve zero emissions but also zero waste through the efficient use of excess mining-generated heat in our greenhouses.


      </Desc>
    </>
  );
};

export default ProductDesign;
