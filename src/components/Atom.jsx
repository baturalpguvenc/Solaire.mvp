import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Atom = () => {
  const atoms = new Array(10).fill(null).map((_, index) => {
    const radius = Math.random() * 0.02;
    const x = (Math.random() - 0.5) * 5;
    const y = (Math.random() - 0.5) * 5;
    const z = (Math.random() - 0.5) * 5;

    return (
      <mesh key={index} position={[x, y, z]} scale={[radius, radius, radius]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial color={0xFFFF00} toneMapped={false} />
      </mesh>
    );
  });

  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.position.x = Math.cos(time);
    groupRef.current.position.y = Math.sin(time) * 2; // Atomların y ekseninde yukarı ve aşağı hareketi
  });

  return (
    <group ref={groupRef}>
      {atoms}
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </group>
  );
};

export default Atom;