import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

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
        Traditional centralized optimization and management schemes may be incompatible with a changing energy system whose structure is becoming increasingly distributed. This challenge can hopefully be addressed by blockchain. However, existing blockchains have not been well prepared to integrate mathematical optimization, which plays a key role in many energy system applications. Here we propose a blockchain consensus mechanism tailored to support mathematical optimization problems, called Proof of Solution (PoSo). PoSo mimics Proof of Work (PoW) by replacing the meaningless mathematical puzzle in PoW with a meaningful optimization problem. This is inspired by the fact that both the solutions to the puzzle and to an optimization problem are hard to find but easy to verify. We show the security and necessity of PoSo by using PoSo to enable energy dispatch and trading for two integrated energy systems. The results show that compared with existing optimization schemes, PoSo ensures that only the optimal solution is accepted and executed by participants. Further, compared with existing blockchains, PoSo can seamlessly incorporate mathematical optimization and minimize the workload associated with searching and verifying the optimum.
      </Desc>
    </>
  );
};

export default ProductDesign;
