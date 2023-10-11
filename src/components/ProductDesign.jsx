import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: flex-start; /* Align children to the right */
  width: 700px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 2.7) !important; /* Burada 0.7 opaklık değeri ayarlanmıştır */
  text-align: justify;
  border-radius: 30px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  font-size: 20px;
  color: #F4F6F6;
  font-family: "Montserrat", sans-serif;
  background: rgb(2, 0, 36);
  background: linear-gradient(215deg, #0B0110 10%, #0B0E10 49%, #35B73A 100%);
  justify-content: center; /* Horizontally center children */
  
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.7); /* Mobil cihazlar için de aynı şeffaflık eklenmiştir */
  }
`;


const POEText = styled.p`
  font-family: "Montserrat", sans-serif !important;
  font-size: 26px !important;
  color: #03ae5a !important;
  align-self: center; /* Center "POE" text vertically */
`;


const ProductsText = styled.p`
  font-size: 30px !important;
  margin-bottom: -10px;
`;

const ProductDesign = () => {
  // 
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            {/* <Solar color="purple" /> /} {/ Solar bileşenine color prop'u eklendi */}
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>


      <Desc>
        <ProductsText> <b> Green Bitcoin Mining </b> </ProductsText>
        <br />

        Sittaris generates the energy used for Bitcoin mining with solar panels that are placed on top of our greenhouses and we have over 1 GWp in development across Europe and emerging markets, making us a sustainable force in the crypto mining industry. Sittaris offers investing opportunities in an innovative approach, with returns in Bitcoin (BTC) while supporting a greener future for cryptocurrency mining.        <br />
        <br />
        <ProductsText> <b> Proof of Energy </b> </ProductsText>

        <br />
        Sittaris uses blockchain technology to introduce a trustless framework known as "Proof of Energy" (“POE”) for transparently verifying the source and quantity of energy generated. Energy generated in our solar parks is sold back to the grid or channeled into a green-mining setup to generate Bitcoin.

        <br />
        <br />
        At the core of our operations, we not only achieve zero emissions but also zero waste through the efficient use of excess mining-generated heat in our greenhouses.


      </Desc>



    </>
  );
};

export default ProductDesign;